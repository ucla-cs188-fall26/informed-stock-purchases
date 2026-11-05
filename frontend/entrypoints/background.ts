import type { CompanyInfo, ExtensionMessage, LookupResult } from '@isp/shared';
import { BACKEND_URL } from '@/lib/config';

const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

// The service worker can stop at any time, so cache in storage instead of memory.
async function fetchCompany(ticker: string): Promise<LookupResult> {
  const key = `company:${ticker}`;
  const cached = (await browser.storage.local.get(key))[key] as
    | { at: number; data: CompanyInfo }
    | undefined;
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return { ok: true, data: cached.data };

  try {
    const res = await fetch(`${BACKEND_URL}/company/${encodeURIComponent(ticker)}`);
    if (!res.ok) return { ok: false, error: `Backend returned ${res.status}` };
    const data = (await res.json()) as CompanyInfo;
    await browser.storage.local.set({ [key]: { at: Date.now(), data } });
    return { ok: true, data };
  } catch {
    return { ok: false, error: 'Could not reach the backend. Is it running?' };
  }
}

export default defineBackground(() => {
  browser.runtime.onMessage.addListener((message: ExtensionMessage, _sender, sendResponse) => {
    if (message.type === 'LOOKUP_COMPANY') {
      fetchCompany(message.ticker).then(sendResponse);
      return true; // keep the channel open for the async response
    }
  });
});

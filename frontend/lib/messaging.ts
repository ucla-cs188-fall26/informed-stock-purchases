import type { ExtensionMessage, LookupResult } from '@isp/shared';

export function lookupCompany(ticker: string): Promise<LookupResult> {
  const message: ExtensionMessage = { type: 'LOOKUP_COMPANY', ticker };
  return browser.runtime.sendMessage(message);
}

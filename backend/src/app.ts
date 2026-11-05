import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { COMPANIES, type ApiError, type CompanyInfo } from '@isp/shared';
import { COMPANY_SUMMARIES } from './data/companySummaries.js';

export const app = new Hono();

// Only the extension calls this API. Tighten the origin to the extension ID before release.
app.use('*', cors({ origin: (origin) => (origin?.startsWith('chrome-extension://') ? origin : null) }));

app.get('/health', (c) => c.json({ ok: true }));

app.get('/company/:ticker', (c) => {
  const ticker = c.req.param('ticker').toUpperCase();
  const company = COMPANIES.find((co) => co.ticker === ticker);
  const summary = COMPANY_SUMMARIES[ticker];
  if (!company || !summary) return c.json<ApiError>({ error: `Unknown ticker: ${ticker}` }, 404);
  return c.json<CompanyInfo>({ ticker, name: company.name, summary, source: 'Placeholder (hand-written)' });
});

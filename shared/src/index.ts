export * from './companies';

/** Response from GET /company/:ticker */
export interface CompanyInfo {
  ticker: string;
  name: string;
  summary: string;
  /** Where the summary came from, shown in the hover card. */
  source: string;
}

export interface ApiError {
  error: string;
}

/** Messages sent from the content script to the background service worker. */
export type ExtensionMessage = { type: 'LOOKUP_COMPANY'; ticker: string };

export type LookupResult =
  | { ok: true; data: CompanyInfo }
  | { ok: false; error: string };

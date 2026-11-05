import { COMPANIES } from '@isp/shared';
import { TERMS } from './terms';

export type Entry =
  | { kind: 'term'; id: string; label: string; definition: string }
  | { kind: 'company'; id: string; label: string; ticker: string };

interface Surface {
  form: string;
  entryId: string;
  caseSensitive: boolean;
}

/** All-caps aliases like "EPS" or "S&P 500" must match exactly, so "eps" in normal text is ignored. */
const isAcronym = (form: string) => /[A-Z]/.test(form) && !/[a-z]/.test(form);

export const ENTRIES = new Map<string, Entry>();
const surfaces: Surface[] = [];

for (const t of TERMS) {
  ENTRIES.set(t.id, { kind: 'term', id: t.id, label: t.label, definition: t.definition });
  for (const form of t.aliases) surfaces.push({ form, entryId: t.id, caseSensitive: isAcronym(form) });
}
for (const c of COMPANIES) {
  const id = `company:${c.ticker}`;
  ENTRIES.set(id, { kind: 'company', id, label: c.name, ticker: c.ticker });
  // Company names are proper nouns: always case-sensitive ("Apple" yes, "apple pie" no).
  for (const form of c.aliases) surfaces.push({ form, entryId: id, caseSensitive: true });
}

const byLowerForm = new Map<string, Surface[]>();
for (const s of surfaces) {
  const key = s.form.toLowerCase();
  byLowerForm.set(key, [...(byLowerForm.get(key) ?? []), s]);
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
}

// Longest forms first so "P/E ratio" wins over "P/E". Optional trailing "s" handles plurals ("dividends", "ETFs").
const forms = [...byLowerForm.keys()].sort((a, b) => b.length - a.length);
const PATTERN = new RegExp(`(?<![\\w-])(${forms.map(escapeRegExp).join('|')})(s)?(?![\\w-])`, 'gi');

export interface Match {
  start: number;
  end: number;
  entryId: string;
}

/** Finds dictionary terms in a piece of text. Pure function, so it is easy to test. */
export function findMatches(text: string): Match[] {
  const out: Match[] = [];
  for (const m of text.matchAll(PATTERN)) {
    const base = m[1];
    const candidates = byLowerForm.get(base.toLowerCase()) ?? [];
    const hit = candidates.find((s) => !s.caseSensitive || s.form === base);
    if (hit) out.push({ start: m.index!, end: m.index! + m[0].length, entryId: hit.entryId });
  }
  return out;
}

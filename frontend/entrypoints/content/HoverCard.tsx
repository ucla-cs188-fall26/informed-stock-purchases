import { useEffect, useState } from 'react';
import type { LookupResult } from '@isp/shared';
import { ENTRIES } from '@/lib/dictionary';
import { lookupCompany } from '@/lib/messaging';
import { useHover } from './hoverStore';

const CARD_WIDTH = 320;
const GAP = 8;

interface Props {
  onPointerEnter: () => void;
  onPointerLeave: () => void;
}

export function HoverCard({ onPointerEnter, onPointerLeave }: Props) {
  const hover = useHover();
  if (!hover) return null;
  const entry = ENTRIES.get(hover.id);
  if (!entry) return null;

  const { rect } = hover;
  const left = Math.min(Math.max(GAP, rect.left), window.innerWidth - CARD_WIDTH - GAP);
  const showAbove = rect.bottom + 240 > window.innerHeight && rect.top > 240;
  const style: React.CSSProperties = showAbove
    ? { left, bottom: window.innerHeight - rect.top + GAP }
    : { left, top: rect.bottom + GAP };

  return (
    <div className="card" style={style} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}>
      <header className="brand">
        <span className="star">★</span> Informed Stock Purchases
        <span className="kind">{entry.kind === 'term' ? 'Term' : 'Company'}</span>
      </header>
      <div className="body">
        {entry.kind === 'term' ? (
          <>
            <div className="title">{entry.label}</div>
            <p>{entry.definition}</p>
          </>
        ) : (
          <CompanyBody ticker={entry.ticker} label={entry.label} />
        )}
        <div className="disclaimer">For informational purposes only. Not investment advice.</div>
      </div>
    </div>
  );
}

function CompanyBody({ ticker, label }: { ticker: string; label: string }) {
  const [result, setResult] = useState<LookupResult | null>(null);

  useEffect(() => {
    let cancelled = false;
    setResult(null);
    lookupCompany(ticker).then((r) => !cancelled && setResult(r));
    return () => {
      cancelled = true;
    };
  }, [ticker]);

  return (
    <>
      <div className="title">
        {result?.ok ? result.data.name : label} <span className="ticker">{ticker}</span>
      </div>
      {!result && <p className="muted">Loading…</p>}
      {result && !result.ok && <p className="error">{result.error}</p>}
      {result?.ok && (
        <>
          <p>{result.data.summary}</p>
          <div className="muted small">Source: {result.data.source}</div>
        </>
      )}
    </>
  );
}

import { findMatches } from '@/lib/dictionary';

export const TERM_CLASS = 'isp-term';
const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'INPUT', 'SELECT', 'CODE', 'PRE', 'SVG']);

function shouldSkip(node: Node): boolean {
  for (let el = node.parentElement; el; el = el.parentElement) {
    if (SKIP_TAGS.has(el.tagName) || el.isContentEditable || el.classList.contains(TERM_CLASS)) return true;
    if (el.tagName === 'ISP-HOVER-CARD') return true;
  }
  return false;
}

function wrapMatches(textNode: Text) {
  const text = textNode.data;
  const matches = findMatches(text);
  if (matches.length === 0) return;

  const frag = document.createDocumentFragment();
  let last = 0;
  for (const { start, end, entryId } of matches) {
    if (start > last) frag.append(text.slice(last, start));
    const span = document.createElement('span');
    span.className = TERM_CLASS;
    span.dataset.ispId = entryId;
    span.textContent = text.slice(start, end);
    frag.append(span);
    last = end;
  }
  if (last < text.length) frag.append(text.slice(last));
  textNode.replaceWith(frag);
}

function isScannable(node: Node) {
  return !!node.nodeValue?.trim() && !shouldSkip(node);
}

export function scan(root: Node) {
  // TreeWalker never returns its root, so a lone text node (e.g. a headline whose
  // text a framework just replaced) must be handled directly.
  if (root.nodeType === Node.TEXT_NODE) {
    if (isScannable(root)) wrapMatches(root as Text);
    return;
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (isScannable(n) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT),
  });
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  nodes.forEach(wrapMatches);
}

/**
 * Re-scan content that changes after load: SPAs, infinite scroll, live updates, and
 * frameworks (React etc.) that re-render server HTML and drop our spans.
 */
export function observe(onError?: (e: unknown) => void) {
  let pending: Node[] = [];
  let scheduled = false;
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'characterData') pending.push(m.target); // text edited in place
      else m.addedNodes.forEach((n) => pending.push(n));
    }
    if (scheduled) return;
    scheduled = true;
    requestIdleCallback(() => {
      const batch = pending;
      pending = [];
      scheduled = false;
      try {
        batch.forEach((n) => n.isConnected && scan(n));
      } catch (e) {
        onError?.(e);
      }
    });
  });
  observer.observe(document.body, { childList: true, characterData: true, subtree: true });
  return () => observer.disconnect();
}

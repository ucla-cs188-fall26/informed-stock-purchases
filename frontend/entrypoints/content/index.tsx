import ReactDOM from 'react-dom/client';
import { HoverCard } from './HoverCard';
import { hoverStore } from './hoverStore';
import { observe, scan, TERM_CLASS } from './scanner';
import './style.css';

const SHOW_DELAY_MS = 250;
const HIDE_DELAY_MS = 200;

// Styles for highlighted terms live in the page itself (outside the shadow root).
// Temporary look: yellow underline plus a small star, so it is obvious the extension added it.
function injectTermStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .${TERM_CLASS} {
      text-decoration: underline solid #f5b301 2px !important;
      text-underline-offset: 3px !important;
      cursor: help !important;
    }
    .${TERM_CLASS}::after {
      content: "\\2605";
      color: #f5b301;
      font-size: 0.65em;
      vertical-align: super;
      margin-left: 1px;
      text-decoration: none;
      display: inline-block;
    }
  `;
  document.head.append(style);
}

export default defineContentScript({
  matches: ['<all_urls>'],
  cssInjectionMode: 'ui',
  async main(ctx) {
    injectTermStyles();
    scan(document.body);
    const stopObserving = observe((e) => console.warn('[ISP] scan failed', e));
    ctx.onInvalidated(stopObserving);

    let showTimer: number | undefined;
    let hideTimer: number | undefined;
    const cancelHide = () => clearTimeout(hideTimer);
    const scheduleHide = () => {
      clearTimeout(showTimer);
      hideTimer = window.setTimeout(() => hoverStore.set(null), HIDE_DELAY_MS);
    };

    document.addEventListener('mouseover', (e) => {
      const target = (e.target as Element).closest?.(`.${TERM_CLASS}`) as HTMLElement | null;
      if (!target) return;
      cancelHide();
      clearTimeout(showTimer);
      showTimer = window.setTimeout(() => {
        hoverStore.set({ id: target.dataset.ispId!, rect: target.getBoundingClientRect() });
      }, SHOW_DELAY_MS);
    });
    document.addEventListener('mouseout', (e) => {
      if ((e.target as Element).closest?.(`.${TERM_CLASS}`)) scheduleHide();
    });
    window.addEventListener('scroll', () => hoverStore.set(null), { passive: true });

    const ui = await createShadowRootUi(ctx, {
      name: 'isp-hover-card',
      position: 'overlay',
      zIndex: 2147483647,
      onMount(container) {
        const root = ReactDOM.createRoot(container);
        root.render(<HoverCard onPointerEnter={cancelHide} onPointerLeave={scheduleHide} />);
        return root;
      },
      onRemove(root) {
        root?.unmount();
      },
    });
    ui.mount();
  },
});

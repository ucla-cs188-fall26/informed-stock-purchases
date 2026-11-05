import { useSyncExternalStore } from 'react';

export interface HoverState {
  id: string;
  rect: DOMRect;
}

let state: HoverState | null = null;
const listeners = new Set<() => void>();

export const hoverStore = {
  get: () => state,
  set(next: HoverState | null) {
    state = next;
    listeners.forEach((l) => l());
  },
  subscribe(l: () => void) {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};

export const useHover = () => useSyncExternalStore(hoverStore.subscribe, hoverStore.get);

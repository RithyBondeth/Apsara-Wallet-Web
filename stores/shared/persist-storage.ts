import { createJSONStorage, type StateStorage } from "zustand/middleware";

/* --------------------------------- Helper --------------------------------- */
// During SSR there is no `window`, so persisted stores fall back to a no-op
// storage instead of throwing while Next.js pre-renders the page.
const noopStorage: StateStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

export const safePersistStorage = createJSONStorage(() =>
  typeof window === "undefined" ? noopStorage : localStorage,
);

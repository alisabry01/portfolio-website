import { useSyncExternalStore, useMemo } from "react";

export function useMediaQuery(query: string): boolean {
  const mediaQueryList = useMemo(() => {
    if (typeof window === "undefined") return null;
    return window.matchMedia(query);
  }, [query]);

  return useSyncExternalStore(
    (callback) => {
      if (!mediaQueryList) return () => {};

      mediaQueryList.addEventListener("change", callback);
      return () => mediaQueryList.removeEventListener("change", callback);
    },
    () => mediaQueryList?.matches ?? false,
    () => false,
  );
}

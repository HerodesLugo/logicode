import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Hydration-safe mounted check using React's recommended SSR pattern.
 * Returns `false` on the server and `true` on the client after hydration,
 * avoiding the setState-in-effect lint error and hydration mismatches.
 */
export function useIsMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

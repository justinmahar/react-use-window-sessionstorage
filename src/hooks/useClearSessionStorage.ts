import React, { useEffect } from 'react';
import { clearEvent, getEmitterSingleton } from './emitter-singleton';

/**
 * See documentation: [useClearSessionStorage](https://devboldly.github.io/react-use-window-sessionstorage/useClearSessionStorage)
 *
 * This hook calls [sessionStorage.clear()](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) to clear all items from `sessionStorage`.
 *
 * All hooks will be reset back to their default values, or to `null` if none was provided.
 */
export function useClearSessionStorage(): () => void {
  const [shouldClear, setShouldClear] = React.useState(false);
  useEffect(() => {
    if (shouldClear && typeof window !== 'undefined') {
      setShouldClear(false);
      try {
        window.sessionStorage.clear();
        getEmitterSingleton().emit(clearEvent);
      } catch (e) {
        console.error(e);
      }
    }
  }, [shouldClear]);

  const clearSessionStorage = React.useCallback(() => setShouldClear(true), []);
  return clearSessionStorage;
}

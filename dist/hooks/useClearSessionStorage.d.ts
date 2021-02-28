/**
 * See documentation: [useClearSessionStorage](https://justinmahar.github.io/react-use-window-sessionstorage/useClearSessionStorage)
 *
 * This hook calls [sessionStorage.clear()](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) to clear all items from `sessionStorage`.
 *
 * All hooks will be reset back to their default values, or to `null` if none was provided.
 */
export declare function useClearSessionStorage(): () => void;

import { SessionStorageItem } from './useSessionStorageItem';
/**
 * See documentation: [useSessionStorageNumber](https://justinmahar.github.io/react-use-window-sessionstorage/useSessionStorageNumber)
 *
 * This hook gets and sets a `number` in [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).
 *
 * Features synchronization across hooks sharing the same key name.
 *
 * @param keyName - **Required.** Key name to use in sessionStorage.
 * @param defaultValue - Optional. Provide a default `number` value when the key's value is not found in sessionStorage. Will be immediately written to sessionStorage if not present. Use `null` for no default.
 */
export declare function useSessionStorageNumber(keyName: string, defaultValue?: number | null): SessionStorageItem<number>;

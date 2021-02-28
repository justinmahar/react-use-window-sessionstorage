import { SessionStorageItem } from './useSessionStorageItem';
/**
 * See documentation: [useSessionStorageString](https://justinmahar.github.io/react-use-window-sessionstorage/useSessionStorageString)
 *
 * This hook gets and sets a `string` in [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).
 *
 * Features synchronization across hooks sharing the same key name.
 *
 * @param keyName - **Required.** Key name to use in sessionStorage.
 * @param defaultValue - Optional. Provide a default `string` value when the key's value is not found in sessionStorage. Will be immediately written to sessionStorage if not present. Use `null` for no default.
 */
export declare function useSessionStorageString(keyName: string, defaultValue?: string | null): SessionStorageItem<string>;

import { SessionStorageItem } from './useSessionStorageItem';
/**
 * See documentation: [useSessionStorageObject](https://justinmahar.github.io/react-use-window-sessionstorage/useSessionStorageObject)
 *
 * This hook gets and sets an `Object` in [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage). This includes arrays.
 *
 * Uses [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
 * and [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) for string encoding, so make sure your object is compatible with that interface. For objects that `JSON.stringify()` can't handle, provide your own encoding via [useSessionStorageItem](https://justinmahar.github.io/react-use-window-sessionstorage/useSessionStorageItem).
 *
 * Features synchronization across hooks sharing the same key name.
 *
 *
 * @param keyName - **Required.** Key name to use in sessionStorage.
 * @param defaultValue - Optional. Provide a default `Object` value when the key's value is not found in sessionStorage. Will be immediately written to sessionStorage if not present. Use `null` for no default.
 */
export declare function useSessionStorageObject(keyName: string, defaultValue?: any | null): SessionStorageItem<any>;

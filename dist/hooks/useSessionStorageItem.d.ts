/**
 * See documentation: [useSessionStorageItem](https://justinmahar.github.io/react-use-window-sessionstorage/useSessionStorageItem)
 *
 * This hook gets and sets an item in [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) using the provided encode and decode functions.
 *
 * Features synchronization across hooks sharing the same key name.
 *
 * Hooks for [boolean](https://justinmahar.github.io/react-use-window-sessionstorage/useSessionStorageBoolean), [number](https://justinmahar.github.io/react-use-window-sessionstorage/useSessionStorageNumber), and [string](https://justinmahar.github.io/react-use-window-sessionstorage/useSessionStorageString) primitives are available. There is also a [hook for objects](https://justinmahar.github.io/react-use-window-sessionstorage/useSessionStorageObject) that uses [JSON string encoding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
 *
 * @param keyName - **Required.** Key name to use in sessionStorage.
 * @param defaultValueOptional - **Required.** Provide a default value when the key's value is not found in sessionStorage. Will be immediately written to sessionStorage if not present. Use `null` for no default.
 * @param encode - **Required.** Encode function for the value. Since sessionStorage uses strings only, all values must be encoded to a string.
 * @param decode - **Required.** Encode function for the item string in sessionStorage. Since sessionStorage uses strings only, all values must be decoded from a string.
 */
export declare function useSessionStorageItem<T>(keyName: string, defaultValue: T | null | undefined, encode: (value: T) => string, decode: (itemString: string) => T): SessionStorageItem<T>;
export declare type SessionStorageValue<T> = T | null;
export declare type SessionStorageItem<T> = [SessionStorageValue<T>, (value: SessionStorageValue<T>) => void, boolean, boolean, () => void];
export declare function defaultEncode<T>(value: T): string;
export declare function defaultDecode<T>(itemString: string): T;

import * as React from 'react';
import { getEmitterSingleton, clearEvent } from './emitter-singleton';
import isStorageAvailable from './isStorageAvailable';

/**
 * See documentation: [useSessionStorageItem](https://devboldly.github.io/react-use-window-sessionstorage/useSessionStorageItem)
 *
 * This hook gets and sets an item in [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) using the provided encode and decode functions.
 *
 * Features synchronization across hooks sharing the same key name.
 *
 * Hooks for [boolean](https://devboldly.github.io/react-use-window-sessionstorage/useSessionStorageBoolean), [number](https://devboldly.github.io/react-use-window-sessionstorage/useSessionStorageNumber), and [string](https://devboldly.github.io/react-use-window-sessionstorage/useSessionStorageString) primitives are available. There is also a [hook for objects](https://devboldly.github.io/react-use-window-sessionstorage/useSessionStorageObject) that uses [JSON string encoding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
 *
 * @param keyName - **Required.** Key name to use in sessionStorage.
 * @param defaultValueOptional - **Required.** Provide a default value when the key's value is not found in sessionStorage. Will be immediately written to sessionStorage if not present. Use `null` for no default.
 * @param encode - **Required.** Encode function for the value. Since sessionStorage uses strings only, all values must be encoded to a string.
 * @param decode - **Required.** Encode function for the item string in sessionStorage. Since sessionStorage uses strings only, all values must be decoded from a string.
 */
export function useSessionStorageItem<T>(
  keyName: string,
  defaultValue: SessionStorageValue<T> = null,
  encode: (value: T) => string,
  decode: (itemString: string) => T
): SessionStorageItem<T> {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [shouldPush, setShouldPush] = React.useState<boolean>(false);
  const [shouldPull, setShouldPull] = React.useState<boolean>(false);
  const [value, setItemValue] = React.useState<SessionStorageValue<T>>(defaultValue);
  const [available, setAvailable] = React.useState(true);

  React.useEffect(() => {
    // Synchronize value with sessionStorage on first render
    if (loading) {
      setLoading(false);
      // Make sure sessionStorage is actually available
      if (isStorageAvailable()) {
        // Get the item
        const retrievedSessionStorageState = sessionStorage.getItem(keyName);
        // If on first render we actually find a value, use it.
        if (retrievedSessionStorageState !== null) {
          try {
            // Set to decoded value, or fall back to default when null
            setItemValue(retrievedSessionStorageState !== null ? decode(retrievedSessionStorageState) : defaultValue);
          } catch (e) {
            console.error(e);
          }
        }
        // Else if we didn't find a value but a default one was provided, push it.
        else if (defaultValue !== null) {
          setShouldPush(true);
        }
        // And set to the default value
        setItemValue(defaultValue);
      } else {
        setAvailable(false);
      }
    }
  }, [keyName, loading, defaultValue, decode, available]);

  React.useEffect(() => {
    if (!loading) {
      // Pull value from sessionStorage
      if (shouldPull) {
        try {
          const retrievedSessionStorageState = sessionStorage.getItem(keyName);
          setShouldPull(false);
          // Set to decoded value, or fall back to default when null
          setItemValue(retrievedSessionStorageState !== null ? decode(retrievedSessionStorageState) : defaultValue);
        } catch (e) {
          console.error(e);
        }
      }
      // Push value to sessionStorage
      else if (shouldPush) {
        setShouldPush(false);
        if (value !== null) {
          try {
            const encodedVal = encode(value);
            sessionStorage.setItem(keyName, encodedVal);
          } catch (e) {
            console.error(e);
          }
        } else {
          // Remove when setting to null
          sessionStorage.removeItem(keyName);
        }
      }
    }
  }, [keyName, shouldPull, shouldPush, decode, defaultValue, value, encode, available, loading]);

  // Emitter handler (synchronizes hooks)
  React.useEffect(() => {
    let aborted = false;
    const itemChangeListener = (value: SessionStorageValue<T>): void => {
      if (!aborted) {
        setItemValue(value);
      }
    };
    const clearListener = (): void => {
      if (!aborted) {
        setLoading(true);
      }
    };
    getEmitterSingleton().on(keyName, itemChangeListener);
    getEmitterSingleton().on(clearEvent, clearListener);
    return () => {
      getEmitterSingleton().off(keyName, itemChangeListener);
      getEmitterSingleton().off(clearEvent, clearListener);
      aborted = true;
    };
  });

  const setValue = React.useCallback(
    (newVal: SessionStorageValue<T>): void => {
      const newValOrDefault = newVal !== null ? newVal : defaultValue;
      setItemValue(newValOrDefault);
      setShouldPush(true);
      getEmitterSingleton().emit(keyName, newVal);
    },
    [defaultValue, keyName]
  );

  const restore = React.useCallback((): void => {
    setShouldPull(true);
  }, [setShouldPull]);

  const reset = React.useCallback((): void => {
    setValue(defaultValue);
  }, [defaultValue, setValue]);

  return [value, setValue, loading, available, reset, restore];
}
export type SessionStorageValue<T> = T | null;

export type SessionStorageItem<T> = [
  SessionStorageValue<T>,
  (value: SessionStorageValue<T>) => void,
  boolean,
  boolean,
  () => void,
  () => void
];

export function defaultEncode<T>(value: T): string {
  return JSON.stringify(value);
}

export function defaultDecode<T>(itemString: string): T {
  return itemString !== null ? JSON.parse(itemString) : null;
}

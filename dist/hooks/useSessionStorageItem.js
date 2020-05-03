"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var emitter_singleton_1 = require("./emitter-singleton");
var isStorageAvailable_1 = __importDefault(require("./isStorageAvailable"));
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
function useSessionStorageItem(keyName, defaultValue, encode, decode) {
    if (defaultValue === void 0) { defaultValue = null; }
    var _a = React.useState(true), loading = _a[0], setLoading = _a[1];
    var _b = React.useState(false), shouldPush = _b[0], setShouldPush = _b[1];
    var _c = React.useState(false), shouldPull = _c[0], setShouldPull = _c[1];
    var _d = React.useState(defaultValue), value = _d[0], setItemValue = _d[1];
    var _e = React.useState(true), available = _e[0], setAvailable = _e[1];
    React.useEffect(function () {
        // Synchronize value with sessionStorage on first render
        if (loading) {
            setLoading(false);
            // Make sure sessionStorage is actually available
            if (isStorageAvailable_1.default()) {
                // Get the item
                var retrievedSessionStorageState = sessionStorage.getItem(keyName);
                // If on first render we actually find a value, use it.
                if (retrievedSessionStorageState !== null) {
                    try {
                        // Set to decoded value, or fall back to default when null
                        setItemValue(retrievedSessionStorageState !== null ? decode(retrievedSessionStorageState) : defaultValue);
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
                // Else if we didn't find a value but a default one was provided, push it.
                else if (defaultValue !== null) {
                    setShouldPush(true);
                }
                // And set to the default value
                setItemValue(defaultValue);
            }
            else {
                setAvailable(false);
            }
        }
    }, [keyName, loading, defaultValue, decode, available]);
    React.useEffect(function () {
        if (!loading) {
            // Pull value from sessionStorage
            if (shouldPull) {
                try {
                    var retrievedSessionStorageState = sessionStorage.getItem(keyName);
                    setShouldPull(false);
                    // Set to decoded value, or fall back to default when null
                    setItemValue(retrievedSessionStorageState !== null ? decode(retrievedSessionStorageState) : defaultValue);
                }
                catch (e) {
                    console.error(e);
                }
            }
            // Push value to sessionStorage
            else if (shouldPush) {
                setShouldPush(false);
                if (value !== null) {
                    try {
                        var encodedVal = encode(value);
                        sessionStorage.setItem(keyName, encodedVal);
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
                else {
                    // Remove when setting to null
                    sessionStorage.removeItem(keyName);
                }
            }
        }
    }, [keyName, shouldPull, shouldPush, decode, defaultValue, value, encode, available, loading]);
    // Emitter handler (synchronizes hooks)
    React.useEffect(function () {
        var aborted = false;
        var itemChangeListener = function (value) {
            if (!aborted) {
                setItemValue(value);
            }
        };
        var clearListener = function () {
            if (!aborted) {
                setLoading(true);
            }
        };
        emitter_singleton_1.getEmitterSingleton().on(keyName, itemChangeListener);
        emitter_singleton_1.getEmitterSingleton().on(emitter_singleton_1.clearEvent, clearListener);
        return function () {
            emitter_singleton_1.getEmitterSingleton().off(keyName, itemChangeListener);
            emitter_singleton_1.getEmitterSingleton().off(emitter_singleton_1.clearEvent, clearListener);
            aborted = true;
        };
    });
    var setValue = React.useCallback(function (newVal) {
        var newValOrDefault = newVal !== null ? newVal : defaultValue;
        setItemValue(newValOrDefault);
        setShouldPush(true);
        emitter_singleton_1.getEmitterSingleton().emit(keyName, newVal);
    }, [defaultValue, keyName]);
    var restore = React.useCallback(function () {
        setShouldPull(true);
    }, [setShouldPull]);
    var reset = React.useCallback(function () {
        setValue(defaultValue);
    }, [defaultValue, setValue]);
    return [value, setValue, loading, available, reset, restore];
}
exports.useSessionStorageItem = useSessionStorageItem;
function defaultEncode(value) {
    return JSON.stringify(value);
}
exports.defaultEncode = defaultEncode;
function defaultDecode(itemString) {
    return itemString !== null ? JSON.parse(itemString) : null;
}
exports.defaultDecode = defaultDecode;

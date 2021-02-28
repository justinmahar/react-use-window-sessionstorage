"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultDecode = exports.defaultEncode = exports.useSessionStorageItem = void 0;
var React = __importStar(require("react"));
var emitter_singleton_1 = require("./emitter-singleton");
var isStorageAvailable_1 = __importDefault(require("./isStorageAvailable"));
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
function useSessionStorageItem(keyName, defaultValue, encode, decode) {
    if (defaultValue === void 0) { defaultValue = null; }
    var _a = React.useState(true), loading = _a[0], setLoading = _a[1];
    var _b = React.useState(false), shouldPush = _b[0], setShouldPush = _b[1];
    var _c = React.useState(null), itemString = _c[0], setItemString = _c[1];
    var _d = React.useState(true), available = _d[0], setAvailable = _d[1];
    var _e = React.useState(new Date().getTime()), renderTime = _e[0], setRenderTime = _e[1];
    React.useEffect(function () {
        // Synchronize value with sessionStorage on first render
        if (loading) {
            setLoading(false);
            // Make sure sessionStorage is actually available
            if (isStorageAvailable_1.default()) {
                var currentItemString = sessionStorage.getItem(keyName);
                // If on first render we actually find a value, use it.
                if (currentItemString !== null) {
                    setItemString(sessionStorage.getItem(keyName));
                }
                // Else if we didn't find a value but a default one was provided, set it.
                else if (defaultValue !== null) {
                    try {
                        setItemString(encode(defaultValue));
                        setShouldPush(true);
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
            }
            else {
                setAvailable(false);
            }
        }
    }, [keyName, loading, defaultValue, decode, available, encode]);
    React.useEffect(function () {
        if (!loading && available) {
            // Push value to sessionStorage
            if (shouldPush) {
                setShouldPush(false);
                if (itemString !== null) {
                    sessionStorage.setItem(keyName, itemString);
                }
                else {
                    // Remove when setting to null
                    sessionStorage.removeItem(keyName);
                }
                // Notify all hooks that have already been rendered.
                emitter_singleton_1.getEmitterSingleton().emit(keyName, itemString);
            }
        }
    }, [itemString, keyName, loading, shouldPush, available]);
    React.useEffect(function () {
        if (!loading && available && !shouldPush) {
            // Check if the latest value from sessionStorage is different from current value
            var trueValue = sessionStorage.getItem(keyName);
            if (itemString !== trueValue) {
                setItemString(trueValue);
            }
        }
    });
    // Emitter handler (synchronizes hooks)
    React.useEffect(function () {
        var aborted = false;
        var itemChangeListener = function (itemString) {
            if (!aborted) {
                setRenderTime(new Date().getTime());
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
        try {
            if (newVal === null) {
                setItemString(null);
            }
            else {
                setItemString(encode(newVal));
            }
            setShouldPush(true);
        }
        catch (e) {
            console.error(e);
        }
    }, [encode]);
    var reset = React.useCallback(function () {
        setValue(defaultValue);
    }, [defaultValue, setValue]);
    var value = itemString !== null ? decode(itemString) : defaultValue;
    return [value, setValue, loading, available, reset];
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

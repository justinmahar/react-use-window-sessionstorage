"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var emitter_singleton_1 = require("./emitter-singleton");
/**
 * See documentation: https://devboldly.github.io/react-use-window-sessionstorage/useClearSessionStorage
 *
 * This hook calls [sessionStorage.clear()](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) to clear all items from `sessionStorage`.
 *
 * All hooks will be reset back to their default values, or to `null` if none was provided.
 */
function useClearSessionStorage() {
    var _a = react_1.default.useState(false), shouldClear = _a[0], setShouldClear = _a[1];
    react_1.useEffect(function () {
        if (shouldClear && typeof window !== 'undefined') {
            setShouldClear(false);
            try {
                window.sessionStorage.clear();
                emitter_singleton_1.getEmitterSingleton().emit(emitter_singleton_1.clearEvent);
            }
            catch (e) {
                console.error(e);
            }
        }
    }, [shouldClear]);
    var clearSessionStorage = react_1.default.useCallback(function () { return setShouldClear(true); }, []);
    return clearSessionStorage;
}
exports.useClearSessionStorage = useClearSessionStorage;

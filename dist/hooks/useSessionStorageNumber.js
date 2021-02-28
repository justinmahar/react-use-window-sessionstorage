"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSessionStorageNumber = void 0;
var useSessionStorageItem_1 = require("./useSessionStorageItem");
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
function useSessionStorageNumber(keyName, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return useSessionStorageItem_1.useSessionStorageItem(keyName, defaultValue, useSessionStorageItem_1.defaultEncode, useSessionStorageItem_1.defaultDecode);
}
exports.useSessionStorageNumber = useSessionStorageNumber;

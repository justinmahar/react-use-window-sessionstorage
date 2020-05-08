"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Check if sessionStorage is available.
 *
 * Adapted from [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).
 */
function isStorageAvailable() {
    if (typeof window !== 'undefined') {
        var storage = void 0;
        try {
            storage = window.sessionStorage;
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            return !!(e instanceof DOMException &&
                // everything except Firefox
                (e.code === 22 ||
                    // Firefox
                    e.code === 1014 ||
                    // test name field too, because code might not be present
                    // everything except Firefox
                    e.name === 'QuotaExceededError' ||
                    // Firefox
                    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                storage &&
                storage.length !== 0);
        }
    }
    return false;
}
exports.default = isStorageAvailable;

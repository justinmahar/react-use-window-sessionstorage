"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearEvent = exports.getEmitterSingleton = void 0;
var events_1 = require("events");
/**
 * Used to keep hooks synchronized.
 *
 * Events:
 * - on `change` - `(keyName: string) => void` - The sessionStorage item with the provided key name has changed
 */
var emitter = undefined;
exports.getEmitterSingleton = function () {
    if (!emitter) {
        emitter = new events_1.EventEmitter();
        emitter.setMaxListeners(100);
    }
    return emitter;
};
exports.clearEvent = 'sessionStorage clear';

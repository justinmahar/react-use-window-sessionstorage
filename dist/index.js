"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./hooks/emitter-singleton"), exports);
__exportStar(require("./hooks/useClearSessionStorage"), exports);
__exportStar(require("./hooks/useSessionStorageBoolean"), exports);
__exportStar(require("./hooks/useSessionStorageItem"), exports);
__exportStar(require("./hooks/useSessionStorageNumber"), exports);
__exportStar(require("./hooks/useSessionStorageObject"), exports);
__exportStar(require("./hooks/useSessionStorageString"), exports);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const debug = debug_1.default('TS-PROJECT:');
const date = new Date();
const error = (err) => {
    debug('ERROR', {
        err,
        date,
    });
};
const log = (info) => {
    debug('LOG', {
        info,
        date,
    });
};
exports.default = {
    error,
    log,
};
//# sourceMappingURL=index.js.map
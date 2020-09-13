"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const create_1 = require("../factories/user/create");
const router = express_1.default();
router.post('/users', (Request, Response) => create_1.createUserController.handle(Request, Response));
exports.default = router;
//# sourceMappingURL=index.js.map
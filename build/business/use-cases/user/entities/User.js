"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuidv4_1 = require("uuidv4");
class User {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id) {
            this.id = uuidv4_1.uuid();
        }
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map
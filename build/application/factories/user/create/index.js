"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = exports.createUserUseCase = void 0;
const PostgresUserRepository_1 = __importDefault(require("../../../../infrastructure/repositories/implementations/PostgresUserRepository"));
const MailTrapMailProvider_1 = __importDefault(require("../../../../infrastructure/providers/implementation/MailTrapMailProvider"));
const CreateUserUseCase_1 = __importDefault(require("../../../../business/use-cases/user/create/CreateUserUseCase"));
const CreateUserController_1 = __importDefault(require("../../../controllers/user/create/CreateUserController"));
const mailTrapMailProvider = new MailTrapMailProvider_1.default();
const postgresUserRepository = new PostgresUserRepository_1.default();
const createUserUseCase = new CreateUserUseCase_1.default(postgresUserRepository, mailTrapMailProvider);
exports.createUserUseCase = createUserUseCase;
const createUserController = new CreateUserController_1.default(createUserUseCase);
exports.createUserController = createUserController;
//# sourceMappingURL=index.js.map
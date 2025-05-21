"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const httpException_1 = __importDefault(require("../exception/httpException"));
const errorHandler = (error, req, res, next) => {
    try {
        if (error instanceof httpException_1.default) {
            const status = error.status || 500;
            const message = error.message || "Something went wrong";
            let respBody = { message: message };
            res.status(status).json(respBody);
        }
        else {
            console.log(error.stack);
            res.status(500).send({ error: error.message });
        }
    }
    catch (err) {
        next(err);
    }
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.middleware.js.map
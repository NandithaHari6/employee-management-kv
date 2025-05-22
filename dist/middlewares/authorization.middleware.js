"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = checkRole;
const httpException_1 = __importDefault(require("../exception/httpException"));
// export const authorizationMiddleware=(req:Request,res:Response,next:NextFunction)=>{
//     const role=req.user?.role
//     if(role!== EmployeeRole.HR){
//             throw new HttpException(403, "User has no privilage to access")
//     }
//     next();
// }
function checkRole(specified_role) {
    return ((req, res, next) => {
        var _a;
        const role = (_a = req.user) === null || _a === void 0 ? void 0 : _a.role;
        if (role !== specified_role) {
            throw new httpException_1.default(403, "User has no privilage to access");
        }
        next();
    });
}
//# sourceMappingURL=authorization.middleware.js.map
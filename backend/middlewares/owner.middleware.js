import { asyncHandler } from "../utils/asyncHandler.js";
import {apiError} from "../utils/apiError.js";

const Owner = asyncHandler((req, res, next) => {
    try { 
        if(req.user?.role === "owner") {
            next();
        } else {
            throw new apiError("Only owners can perform this action", 403);
        }
    }
    catch (error) { 
        throw new apiError(error.message, 500);
    }
});

export { Owner };
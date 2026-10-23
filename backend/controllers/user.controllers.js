import User from "../models/user.models.js";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { validateRegisterUser } from "../validators/user.validator.js";
import { ApiResponse } from "../utils/apiResponse.js";

const signUp = asyncHandler(async (req, res) => {
    
    const { name, email, password, role } = req.body;

    const validationError = validateRegisterUser(email, name, password, role);

    if (validationError) {
        throw new ApiError(400, validationError);
    }

    const existingUser = await User.findOne(
        {
            email 
        }
    );

    if (existingUser) throw new ApiError(409, "User with username or email already exists");

    const user = await User.create({
        name,
        email,
        password,
        role,
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) throw new ApiError(500, "Failed to create user");
    
    return res.status(201).json(new ApiResponse(201, createdUser, "User created successfully"));

});
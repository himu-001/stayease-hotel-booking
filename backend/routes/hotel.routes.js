import express from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { Owner } from "../middlewares/owner.middleware.js";
import { deleteHotel, getAllHotels, getOwnerHotels, registerHotel } from "../controllers/hotel.controllers.js";
import { upload } from "../config/multer.js";

const hotelRouter = express.Router();

hotelRouter.route("/register").post(upload.single("image"), verifyJWT, Owner, registerHotel);

hotelRouter.route("/get").get(verifyJWT, Owner, getOwnerHotels);
hotelRouter.route("/get-all").get(getAllHotels);
hotelRouter.route("/delete/:hotelId").delete(verifyJWT, Owner, deleteHotel);

export default hotelRouter;

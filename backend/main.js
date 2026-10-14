import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use(cookieParser());

// API Endpoints
app.get("/", (req, res) => {
    res.send("Hello World From Server");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
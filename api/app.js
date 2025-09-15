import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
const app = express();
const PORT = 8000;

// app.use();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is listing on port ${PORT}`);
});

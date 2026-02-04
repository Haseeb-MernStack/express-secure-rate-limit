import express from "express";
import testRoutes from "./routes/test.route.js"
import {securityMiddleware} from "./middlewares/security.middleware.js";

const app = express();

app.use(express.json());
securityMiddleware(app);

app.use("/api",testRoutes);

export default app;
import helmet from "helmet";
import {apiLimiter } from "../config/rateLimit.config.js";

export const securityMiddleware = (app)=>{
    app.use(helmet());
    app.use("/api", apiLimiter);
};
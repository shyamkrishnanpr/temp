import express from "express";

import trolleyRoute from "./trolleyRoute";

const router = express.Router();

router.use("/trolley", trolleyRoute);

export default router;

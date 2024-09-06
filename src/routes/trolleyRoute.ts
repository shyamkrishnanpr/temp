import express from "express";

import {
  createTrolley,
  getTrolley,
  updatetrolley,
  filterTrolley,
} from "../controllers/trolleyController";

const router = express.Router();

router.route("/createTrolley").post(createTrolley);
router.route("/getTrolley").get(getTrolley);
router.route("/updateTrolley/:id").put(updatetrolley);
router.route("/filterTrolley").get(filterTrolley);

export default router;

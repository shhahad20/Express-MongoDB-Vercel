import { Router } from "express";
import {
  addList,
  deleteListById,
  getListById,
  getLists,
  updateListById,
} from "../controllers/listController.js";

const router = Router();

router.get("/", getLists);
router.get("/:id", getListById);
router.post("/add-list", addList);
router.put("/:id", updateListById);
router.delete("/:id", deleteListById);

export default router;

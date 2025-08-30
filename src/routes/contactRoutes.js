import express from "express";
import {
  createContact,
  deleteContact,
  getContact,
  getContactById,
  updateContact,
} from "../controller/contactController.js";
const router = express.Router();

router.get("/", getContact);
router.get("/:id", getContactById);
router.post("/", createContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

export default router;

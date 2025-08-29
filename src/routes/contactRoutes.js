import express from "express";
const router = express();

router.get("/contact", (req, res) => {
  res.send("contact route");
});
export default router;

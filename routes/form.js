// userRoutes.js
const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
  const userData = req.body;
  console.log(userData);
  res.json({ success: true });
});

router.post("/signIn", (req, res) => {
  const userData = req.body;
  console.log(userData);
  res.json({ success: true });
});

module.exports = router;

const express = require("express");

const { postUser, getUser } = require("./user-controller");

const router = express.Router();

router.post("/", postUser);
router.get("/", getUser);

module.exports = router;

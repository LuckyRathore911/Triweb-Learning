const express = require("express");

const textController = require("./testController");

const router = express.Router();

router.post("/create", textController.create);
router.post("/retrieve", textController.retrieve);
router.post("/update", textController.update);
router.post("/delete", textController.delete);

module.exports = router;

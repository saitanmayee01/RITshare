var express = require("express");
var router = express.Router();

var clubsController = require("../controllers/clubs");

router.get("/", clubsController.index);
router.get("/create", clubsController.getCreate);
router.post("/create", clubsController.postCreate);

module.exports = router;

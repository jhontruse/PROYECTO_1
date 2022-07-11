const express = require("express");
const router = express.Router();
const { getItems, getItem, createItems } = require("../controllers/tracks");
const { validacion_createItems } = require("../validators/tracks");

//TODO http://localhost/tracks GET,POST,DELETE,PUT

router.get("/", getItems);

router.get("/:id", getItem);

router.post("/", validacion_createItems, createItems);

module.exports = router;

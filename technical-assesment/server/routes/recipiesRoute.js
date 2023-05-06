const express = require("express");

const { getRecepie, add, deleted, update,  } = require("../controller/recipiesController");

const router = express.Router();

router.get("/",getRecepie);
router.post("/",add);
router.delete("/:id",deleted);
router.put("/:id",update);


module.exports = router;


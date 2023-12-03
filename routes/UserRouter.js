const express = require("express");
const router = express.Router();

const {
   signup,
   signin,
   logout,
} = require("../controllers/UserController");


router.post("/signup", signup);
router.get("/signin", signin);
router.post("/logout", logout);
// router.get("/getNewProducts", getNewProducts);

module.exports = router;

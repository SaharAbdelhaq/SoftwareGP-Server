const express = require("express")

const router = express.Router()

const homeController = require("../controllers/HomeController")


router.get("/internalNabatat",homeController.getInternalNabatat)


module.exports = router
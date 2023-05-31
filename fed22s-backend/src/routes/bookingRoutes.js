const express = require("express");
const router = express.Router();

router.post("/"); //create new booking
router.get("/"); //get all bookings
router.get("/:id"); //get booking by id
router.put("/:id"); //change booking
router.delete(":/cartId"); //delete booking

module.exports = router;

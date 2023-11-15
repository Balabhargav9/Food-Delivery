const express = require('express');
const router = express.Router();
const {SignUp,login,createOrder,getAllData} = require('./Controller');
router.post("/signup",SignUp);
router.post("/login",login);
router.post("/createorder",createOrder);
router.post("/getdata",getAllData);
module.exports = router;
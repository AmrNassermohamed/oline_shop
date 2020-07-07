const router = require("express").Router();
const body_barser=require("body-parser");
const auth_controller=require("../conttrole/cart_controllr");
router.get("/cart",auth_controller.get_cart  )

module.exports=router;
const router = require("express").Router();
const body_barser=require("body-parser");
const catageroy_controller=require("../conttrole/catageory_controlleer");
const check=require("express-validator").check;
router.get("/category",body_barser.urlencoded({extended:true}),catageroy_controller.getcatageory)
router.post("/search_color",body_barser.urlencoded({extended:true}),catageroy_controller.getcatageory_bycolor)

module.exports=router;
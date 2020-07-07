const router = require("express").Router();
const body_barser=require("body-parser");
const auth=require("./guards/auth_guards")
const single_product=require("../conttrole/single_product_contoller");
router.post("/add_review",auth.isauth,body_barser.urlencoded({extended:true}),single_product.add_review);
router.post("/:id",auth.isauth,body_barser.urlencoded({extended:true}),single_product.add_to_cart)

router.get("/:id",single_product.getsingle_product);

module.exports=router;
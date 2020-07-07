const router=require("express").Router();
const body_barser=require("body-parser");
const contact_controller=require("../conttrole/contact_controller");
router.get("/contact",contact_controller.getcontact);


router.post("/contact",body_barser.urlencoded({extended:true}),contact_controller.postcontact);
module.exports=router;
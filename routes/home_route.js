const router=require('express').Router();
const home_controller=require("../conttrole/home_controller");
const auth_guard=require("./guards/auth_guards")
router.get("/",auth_guard.isauth,(req,res ,next)=>{
    res.render("index",{
        isadmin : req.session.isadmin
    });
})
module.exports=router;
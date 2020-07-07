const Router = require("express").Router();
const body_barser=require("body-parser");
const auth_controller=require("../conttrole/auth_controller");
const check=require("express-validator").check;
Router.get("/signup",auth_controller.getsignup);
Router.post("/signup",body_barser.urlencoded({
  extended:true  
}),check("name").not().isEmpty().withMessage("name is empty"),check("email").not().isEmpty().withMessage("email is empty").isEmail(),check("password").isLength({min:6}).withMessage("password is length > 6"),
check("confirmPassword").custom((value,{req})=>{
    if(value  !== req.body.Password){
return true
    }else{
        throw ("password Dont equal repassword")
    }
}),auth_controller.postsignup)
Router.get("/login",auth_controller.getlogin);
Router.post("/login",body_barser.urlencoded({extended:true}),auth_controller.postlogin)
Router.all("/logout",auth_controller.logout)
module.exports=Router;
const validitionreslut=require("express-validator").validationResult;
const authmodel=require("../models/auth_model")
exports.getsignup=(req,res,next)=>{

    res.render("register",{
  autherror :req.flash("autherror")[0],
  vailderror : req.flash("validerror")   
    });
}
exports.postsignup=(req,res,next)=>{
    if(validitionreslut(req).isEmpty()){
authmodel.createnewuser(req.body.name,req.body.password,req.body.email).then(()=>{
  

    res.redirect("/login")
}).catch(err=>{
   console.log(err);
   req.flash("autherror",err);
    res.redirect("/signup");

})}else{

    req.flash("validerror",validitionreslut(req).array());
    res.redirect("/signup")
}    
}

exports.getlogin=(req,res,next)=>{
    //req.flash("autherror");
    res.render("login",{
        autherror:req.flash("autherror")[0]
    });
}
exports.postlogin=(req,res,next)=>{
    console.log(req.body.email);
    authmodel.login(req.body.email,req.body.password).then(reslut=>{
//console.log(id);
        req.session.userId=reslut.id;
        req.session.isadmin=reslut.isadmin;

res.redirect("/");
    }).catch(err=>{
        console.log(err);
        req.flash("autherror",err);
        res.redirect("/login");
    })
}
exports.logout=(req,res,next)=>{
req.session.destroy(()=>{
    res.redirect("/");
})
}
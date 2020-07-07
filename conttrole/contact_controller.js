const contact_model=require("../models/auth_model")
exports.getcontact=(req,res,next)=>{
    res.render("contact",{
       reslut : req.flash("contact")[0] 
    });
}
exports.postcontact=(req,res,next)=>{
 contact_model.contact(req.body.email,req.body.subject,req.body.messege).then(messege=>{
    req.flash("contact",messege);
    res.redirect("/contact");
 }).catch(err=>{
    console.log(err);
    req.flash("contact",err);
     res.redirect("/contact");
 })   
}
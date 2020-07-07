module.exports =(req,res,next)=>{
    if (req.session.isadmin) next();
    else console.log("not admin");
}
const cartsmodel=require("../models/cart_modle")
exports.get_cart=(req,res,next)=>{
cartsmodel.get_cart_product(req.session.userId).then(c=>{
  console.log(c);  
    res.render("cart",{cart:c});   

})
   
}
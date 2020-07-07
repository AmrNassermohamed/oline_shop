const producrtsmodel=require("../models/product_model")
exports.gethome=(req,res,next)=>{
producrtsmodel.getallproducts().then(products=>{
    print(products[1].name);
    res.render("index",{products: products})
})
}
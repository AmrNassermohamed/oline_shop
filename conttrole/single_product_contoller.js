const product_model=require("../models/product_model");
const cart_mosel=require("../models/cart_modle");
const auth_model=require("../models/auth_model");
exports.add_to_cart=(req,res,next)=>{
cart_mosel.savecatagories(Date.now,req.body.price,req.body.amount,req.session.userId,req.params.id,req.body.name).then(()=>{
  
    res.redirect("/cart");
})

}


exports.add_review=(req,res,next)=>{
    console.log(req.body.email)
    console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
auth_model.review(req.body.email,req.body.subject,req.body.textarea,
    req.body.name, req.body.selected_rating).then(()=>{
    res.redirect("/login");  
}).catch(err=>{
    console.log(err);
})

}
exports.getsingle_product=(req,res,next)=>{

var object;

product_model.get_id_product(req.params.id).then(products=>{
    console.log(products.name)

    product_model.get_one_catageory(products.catageory).then(catageory=>{
      product_model.get_id_color(products.color_product).then(color=>{
        console.log(color);
          
        object={
            catageory:catageory.name,
            price:products.price
            ,name:products.name
            ,color:color.name
            ,description: products.description
            ,product_id:req.params.id

        }
    })
.then(()=>{
    console.log(object);
    res.render("single-product",{
    object:object
    });
})
    })
})


}

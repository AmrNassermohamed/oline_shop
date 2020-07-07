var mongose=require("mongoose");
const producrtsmodel=require("../models/product_model");
 
items =new Array; 
 
  exports.getcatageory_bycolor=(req,res,next)=>{
//console.log(req.body.brand);
//res.redirect("/login")
console.log(req.body.brand);

res.redirect("/category");

  }

exports.getcatageory=(req,res,next)=>{
producrtsmodel.getallcatagories().then(catagories=>{
    producrtsmodel.getallcolor().then( colors=>{
     producrtsmodel.getallmodel().then( models=>{
        producrtsmodel.getallproducts().then(produts =>{
items=new Array;
            for (i = 0; i < produts.length;i++) {
                
                for (j = 0; j < models.length;j++) {
if(models[j]._id.toString().toLowerCase()==produts[i].department_type_product.toString().toLowerCase())
                
{
    
    name=produts[i].name;
    price=produts[i].price;
    produts_id=produts[i]._id;                
    var object={
                        name : name,
                        price:price,
                        models:models[j].name
                       , id:produts_id
                    }
                    items.push(object);
                    console.log(items);
                }
                }

            }
        })
    
    
     setTimeout(() => {
    //    console.log(items);
        res.render("category",{
            catagories:catagories,
            colors:colors,
            models:models,
            proucts:items
        });
    
     }, 300);   
 
     
    
     

    
    

             }).catch(err=>{
                 console.log(err);
             })   
          
                
              
            //console.log(produts.length);                   
            //console.log(items);
       
    })
    })
    


    }
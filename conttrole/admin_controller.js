const productsmodel=require("../models/product_model");
const validationreslut=require("express-validator").validationResult;
const mongose=require('mongoose');
exports.getadd=(req,res,next)=>{
    productsmodel.getalldepatments().then(departments=>{
     //   console.log(departments);
        productsmodel.getallsize().then(sizes=>{
            productsmodel.getallcatagories().then(catagories=>{
                productsmodel.getallmodel().then (model=>{
                    productsmodel.getallcolor().then(color=>{
    res.render("blog",{
        autherror:req.flash("validation_error"),
        isuser: true,
        isadmin:true,
        departmentss:departments,
        sizes:sizes,
        items:req.flash("number_size")
        ,catagories:catagories
        ,model:model,
        color:color,
        product_model:req.flash("product_model")
    })
})
                })
})
})

})
}

 var items=[];
exports.guardarNumeros=(req,res,next)=> {
    var object={
        size:mongose.Types.ObjectId( req.body.sizes_id) ,
        number_size :Number( req.body.number_sizes),

    }
    console.log(req.body.sizes_id)
    items.push(object);
    console.log(req.body.number_sizes);
    console.log(items);
    
    req.flash("number_size",items);
    res.redirect("/add"); // stop submission
  }
exports.postAdd=(req,res,next)=>{
    productsmodel.savecatagories(req.body.namecata).then(()=>{
        res.redirect("/add");
    }).catch(err=>{
        console.log(err);
        req.flash("validation_error",err);
        res.redirect("/add");
    })
}
exports.postadddepartment=(req,res,next)=>{
    productsmodel.savedepartments(req.body.departments).then(()=>{
        res.redirect("/add");
    }).catch(err=>{
        console.log(err);
        req.flash("validation_error",err);
        res.redirect("/add");
    })
}
exports.postsavedepartment_type=(req,res,next)=>{
    productsmodel.departmenttt_type(req.body.departments_type, req.body.department_id).then(()=>{
        res.redirect("/add");
    }).catch(err=>{
        console.log(err);
        req.flash("validation_error",err);
        res.redirect("/add");
    })
}
exports.postsave_color=(req,res,next)=>{
    productsmodel.savecolor(req.body.color).then(()=>{
        res.redirect("/add");
    }).catch(err=>{
        console.log(err);
        req.flash("validation_error",err);
        res.redirect("/add");
    })
}

exports.savesize=(req,res,nex)=>{
    productsmodel.size(req.body.name_size).then(()=>{
        res.redirect("/add");
    }).catch(err=>{
        console.log(err);
        req.flash("validation_error",err);
        res.redirect("/add");
    })

}
const multer=require("multer");
exports.add_product=(req,res,next)=>{
    console.log( req.body.color_id );
        
productsmodel.save_product(req.body.name_product,req.body.images,req.body.color_id ,req.body.Description,req.body.model_id
    ,req.body.price_product,req.body.catagories_id,items).then(productsmodel=>{
       //console.log(req.body.name_product + req.body.color_id+ req.body.catagories_id+req.body.catagories_id );
        
        
        req.flash("product_model","fggggggggggg")
        res.redirect("/add");
    }).catch(err=>{
        console.log(err);
        req.flash("product_model",err);
        res.redirect("/add")
    })   


}

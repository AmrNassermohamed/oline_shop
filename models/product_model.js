const mongose=require('mongoose');
const Dburl="mongodb://localhost:27017/clothes_sport";

const productschema=mongose.Schema({
    name :String,
    image : String,
    description : String,
    catageory : Object,
    color_product :Object,
    department_type_product : Object,
    size_product :Array,
    price : Number,
})

const catagoriesschema =mongose.Schema({
    name :String
})
const departments_type =mongose.Schema({
    name :String,
    departments_id:Object,
})


const catageory=mongose.model("catagories",catagoriesschema);
const product=mongose.model("products",productschema)
const
 departments=mongose.model("departments",catagoriesschema)
const department_type=mongose.model("models",departments_type)
const size_type=mongose.model("sizes",catagoriesschema);
const colors=mongose.model("color",catagoriesschema)

exports.get_id_color=(id)=>{
    return new Promise((resolve,reject)=>{
        mongose.connect(Dburl).then(()=>{
      return     colors .findOne({_id : id}).then(products=>{
                resolve(products);
             //   console.log(products.name);
                mongose.disconnect();
             
            })
        .catch(err=>{
            reject(err);
            mongose.disconnect();
        })
    })
      })

}
exports.get_id_product=(id)=>{
    return new Promise((resolve,reject)=>{
        mongose.connect(Dburl).then(()=>{
      return     product .findOne({_id : id}).then(products=>{
                resolve(products);
             //   console.log(products.name);
                mongose.disconnect();
             
            })
        .catch(err=>{
            reject(err);
            mongose.disconnect();
        })
    })
      })

}
exports.get_one_catageory=(id)=>{
    return new Promise((resolve,reject)=>{
        mongose.connect(Dburl).then(()=>{
      return     catageory .findOne({_id : id}).then(products=>{
                resolve(products);
             //   console.log(products.name);
                mongose.disconnect();
             
            })
        .catch(err=>{
            reject(err);
            mongose.disconnect();
        })
    })
      })

    }
exports.getallproducts=()=>{
    return new Promise((resolve,reject)=>{
      mongose.connect(Dburl).then(()=>{
    return      product.find({}).then(products=>{
              resolve(products);
           //   console.log(products.name);
              mongose.disconnect();
           
          })
      .catch(err=>{
          reject(err);
          mongose.disconnect();
      })
  })
    })
    
      
  }

exports.savecatagories=(catageoryy)=>{
    return new Promise((resolve,reject)=>{
mongose.connect(Dburl).then(()=>{
    let catageoryyyy=new catageory({name:catageoryy});
    return catageoryyyy.save();
}).then(()=>{
    mongose.disconnect();
    resolve();
}).catch(err=>{
    mongose.disconnect();
    reject(err);
})
    })
}



exports.save_product=(name,image,color_product,description,department_type_product,price,catageory_product,size_product)=>{
    return new Promise((resolve,reject)=>{
mongose.connect(Dburl).then(()=>{
    var ObjectId = require('mongodb').ObjectID;
    console.log(department_type_product);
    //console.log(size_p)
    
    let products= //new catageory({name:name});
    new product ({name:name,
        image:image,
        price:Number(price),
        description:description,
        color_product:mongose.Types.ObjectId( color_product)
        ,department_type_product:mongose.Types.ObjectId(department_type_product),
       catageory:mongose.Types.ObjectId(catageory_product),
        size:Array(size_product)
        
    });
    console.log(products);
    return products.save(); 
}).then(()=>{
    mongose.disconnect();
    resolve();
}).catch(err=>{
    mongose.disconnect();
    reject(err);
})
    })
}
exports.savecolor=(colorf)=>{
    return new Promise((resolve,reject)=>{
mongose.connect(Dburl).then(()=>{
    let color=new colors({name:colorf});
    return color.save();
}).then(()=>{
    mongose.disconnect();
    resolve();
}).catch(err=>{
    mongose.disconnect();
    
    reject(err);
})
    })
}

exports.savedepartments=(catageoryy)=>{
    return new Promise((resolve,reject)=>{
mongose.connect(Dburl).then(()=>{
    let catageoryyyy=new departments({name:catageoryy});
    return catageoryyyy.save();
}).then(()=>{
    mongose.disconnect();
    resolve();
}).catch(err=>{
    mongose.disconnect();
    reject(err);
})
    })
}
exports.getalldepatments=()=>{
    return new Promise((resolve,reject)=>{
      mongose.connect(Dburl).then(()=>{
    return      departments.find({}).then(products=>{
              resolve(products);
           //   console.log(products.name);
              mongose.disconnect();
           
          })
      .catch(err=>{
          reject(err);
          mongose.disconnect();
      })
  })
    })
    
      
  }
  
  exports.getallsize=()=>{
    return new Promise((resolve,reject)=>{
      mongose.connect(Dburl).then(()=>{
    return     size_type .find({}).then(products=>{
              resolve(products);
           //   console.log(products.name);
              mongose.disconnect();
           
          })
      .catch(err=>{
          reject(err);
          mongose.disconnect();
      })
  })
    })
    
      
  }
  exports.getallcatagories=()=>{
    return new Promise((resolve,reject)=>{
      mongose.connect(Dburl).then(()=>{
    return     catageory .find({}).then(products=>{
              resolve(products);
           //   console.log(products.name);
              mongose.disconnect();
           
          })
      .catch(err=>{
          reject(err);
          mongose.disconnect();
      })
  })
    })
    
    
      
  }
  exports.getallmodel=()=>{
    return new Promise((resolve,reject)=>{
      mongose.connect(Dburl).then(()=>{
    return     department_type .find({}).then(products=>{
              resolve(products);
           //   console.log(products.name);
              mongose.disconnect();
           
          })
      .catch(err=>{
          reject(err);
          mongose.disconnect();
      })
  })
    })
}
exports.get_id_model=(product_type_department)=>{
    return new Promise((resolve,reject)=>{
      mongose.connect(Dburl).then(()=>{
    return     department_type .findOne({_id : product_type_department}).then(products=>{
              resolve(products);
           //   console.log(products.name);
              mongose.disconnect();
           
          })
      .catch(err=>{
          reject(err);
          mongose.disconnect();
      })
  })
    })
}
exports.getallcolor=()=>{
    return new Promise((resolve,reject)=>{
      mongose.connect(Dburl).then(()=>{
    return     colors .find({}).then(products=>{
              resolve(products);
           //   console.log(products.name);
              mongose.disconnect();
           
          })
      .catch(err=>{
          reject(err);
          mongose.disconnect();
      })
  })
    })
}
  exports.size=(name)=>{
    return new Promise((resolve ,reject)=>{
        mongose.connect(Dburl).then(()=>{
          return  size_type.findOne({name:name}).then(user=>{
              if(user){ 
                mongose.disconnect();  
                reject("department isfound");}
              else{
let department =new size_type({name :name });
return department.save();
}
}).then(()=>{
    resolve ("te department saved");
    mongose.disconnect();
}).catch(err=>{
    reject(err);
    mongose.disconnect();

              
          
        
        })
    })
})}

  exports.departmenttt_type=(name , departments_id)=>{
    return new Promise((resolve ,reject)=>{
        mongose.connect(Dburl).then(()=>{
          return  department_type.findOne({name:name}).then(user=>{
              if(user){ 
                mongose.disconnect();  
                reject("department isfound");}
              else{
let department =new department_type({name :name ,departments_id :mongose.Types.ObjectId( departments_id)});
return department.save();
}
}).then(()=>{
    resolve ("te department saved");
    mongose.disconnect();
}).catch(err=>{
    reject(err);
    mongose.disconnect();

              
          
        
        })
    })
})}

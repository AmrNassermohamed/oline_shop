const mongose=require('mongoose');
const Dburl="mongodb://localhost:27017/clothes_sport";
const cartschema=mongose.Schema({
    time_stamp :Number,
    price : Number,
    amount : Number,
    userId : Object,
    product_id :Object,
    name :String
    
    
})
const carts=mongose.model("carts",cartschema)
exports.savecatagories=(time_stamp,price, amount,userId,product_id,name)=>{
    return new Promise((resolve,reject)=>{
mongose.connect(Dburl).then(()=>{
    amountt=Number(amount);
    let catageoryyyy=new carts({name:time_stamp,price:price,amount:amountt,userId:userId,product_id:product_id,name:name});
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
exports.get_cart_product=(id)=>{
    return new Promise((resolve,reject)=>{
        mongose.connect(Dburl).then(()=>{
      return     carts .find({userId
        : id}).then(products=>{
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

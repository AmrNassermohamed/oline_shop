const mongose=require('mongoose');
const Dburl="mongodb://localhost:27017/clothes_sport";
const bcrypt=require("bcrypt");

const authschema=mongose.Schema({
    name :String,
    email : String,
    password : String,
    isadmin:{
        type :Boolean
        ,default: false
    }

})
const auth=mongose.model("user",authschema)
exports.createnewuser=(name ,email,password,)=>{
    return new Promise((resolve ,reject)=>{
        mongose.connect(Dburl).then(()=>{
          return  auth.findOne({email:email}).then(user=>{
              if(user){ 
                mongose.disconnect();  
                reject("email isfound");}
              else{
return bcrypt.hash(password,10).then(hashpassword=>{
    let user=new auth({name:name,email:email,password:hashpassword})
   return user.save()
}).then(()=>{
    resolve();
    mongose.disconnect();
}).catch(err=>{
    reject(err);
    mongose.disconnect();
})
              }
          })
        })
    })
}
exports.login=(email,password)=>{
    return new Promise((resolve,reject)=>{
        mongose.connect(Dburl).then(()=>
            auth.findOne({email:email})).then(user=>{
//console.log(user.email);
     if(!user){
         mongose.disconnect();
         reject("there is no user");
     }else{
        return  bcrypt.compare(password,user.password).then(same=>{
            if(!same){
                console.log(password);
                mongose.disconnect();
                reject("password is not correct");
            }
            else{
            mongose.disconnect();
            resolve({id:user._id,isadmin : user.isadmin});
            }
        })
     }       
        }).catch(err=>{
            reject(err);
            mongose.disconnect();
        })
    })
}

const contactschema=mongose.Schema({
    
    email : Object,
    subject : String,
    messege : String,
    

})
const Revieschema=mongose.Schema({
    name: String,
    email : Object,
    subject : String,
    messege : String,
    rate:String,
    
    

})
const contact=mongose.model("contact",contactschema);
const Review=mongose.model("review",Revieschema);
exports.review=(email,subject,messege,name,rate)=>{
    return new Promise((resolve ,reject)=>{
        mongose.connect(Dburl).then(()=>{
return auth.findOne({email :email}).then(user=>{
if(!user){
    mongose.disconnect();
    reject("email not found")
}else{
    console.log(subject);
    let contactt=new Review({email:user._id,subject:subject,messege:messege,name:name,
        rate:rate});
    return contactt.save();
}

}).then(()=>{
    mongose.disconnect();
    resolve("the email  is send")
}).catch(err=>{
mongose.disconnect();
reject(err);
})
        })
    })
}

exports.contact=(email,subject,messege)=>{
    return new Promise((resolve ,reject)=>{
        mongose.connect(Dburl).then(()=>{
return auth.findOne({email :email}).then(user=>{
if(!user){
    mongose.disconnect();
    reject("email not found")
}else{
    let contactt=new contact({email:user._id,subject:subject,messege:messege});
    return contactt.save();
}

}).then(()=>{
    mongose.disconnect();
    resolve("the email  is send")
}).catch(err=>{
mongose.disconnect();
reject(err);
})
        })
    })
}
const express=require('express');
const path=require('path');
const app=express();
const session=require("express-session");
const flash=require("connect-flash");
const sessionstore=require("connect-mongodb-session")(session);
const homeroutes=require("./routes/home_route");
const authroutes=require("./routes/auth_routes")
const contactroutes=require("./routes/contact_routes");
const catageoryroutes=require("./routes/catageory_route");
const  product_single=require("./routes/single_products_route");
const cart_roue=require("./routes/cartt_route");
app.use(express.static(path.join(__dirname,"views")));

app.use(flash());
app.set('view engine','ejs');
app.set('views');
const adminroutes=require("./routes/admin_route");
app.listen(3000,(err)=>{
console.log(err);
console.log("server listen import 3000");
});
const store= new sessionstore({
    uri :"mongodb://localhost:27017/clothes_sport"
    ,collection:"sessions"
})
app.use(session({
    secret:"fffffffffffffffffffffff",
    saveUninitialized:false,
    cookie:{
        maxAge:1*60*60*60*60*100
    },store:store
}))
app.use(homeroutes) 
app.use(authroutes)
app.use(contactroutes)
app.use(adminroutes);
app.use(catageoryroutes);
app.use(cart_roue);
app.use(product_single);

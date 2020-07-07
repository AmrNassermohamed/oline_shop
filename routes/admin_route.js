const router=require("express").Router();
const admin_controller=require("../conttrole/admin_controller");
const admin_body=require("body-parser");
const check=require("express-validator").check;
const multer=require("multer");
var storage = multer.diskStorage({
  destination: function(req, file, callback){
      callback(null, );
  },
  filename: function(req, file, callback){
      callback(null, new Date() + "-" + file.fieldname)
  }
});

var upload = multer({storage: storage})
const adminguards=require("./guards/admin_guard")
router.get("/add",adminguards,admin_controller.getadd  )
router.post("/add",admin_body.urlencoded({extended:true}),admin_controller.postAdd);
router.post("/add_departments",admin_body.urlencoded({extended:true}),admin_controller.postadddepartment);
router.post("/add_size",admin_body.urlencoded({extended:true}),admin_controller.savesize)
router.post("/add_number_of_size",admin_body.urlencoded({extended:true}),admin_controller.guardarNumeros)
router.post("/save_color",admin_body.urlencoded({extended:true}),admin_controller.postsave_color)
router.post("/add_product",admin_body.urlencoded({extended:true}),admin_controller.add_product)
/*router.post('/add_product', upload.single('images'), function(req, res){
  console.log(req.file);
  res.redirect('/add');
})*/



router.post("/save_department_type",admin_body.urlencoded({extended:true}),admin_controller.postsavedepartment_type)
module.exports=router;
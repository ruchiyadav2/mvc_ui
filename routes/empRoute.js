const {getEmp,addEmp,delEmp,updateEmp,showEditForm} = require('../controller/empController');
const express = require('express');
const router = express.Router();

router.get("/",getEmp);
router.post("/add",addEmp)
router.post("/delete/:id", delEmp);
router.get("/edit/:id", showEditForm);
router.post("/edit/:id", updateEmp); 


module.exports = router
const empModel = require('../model/empModel');

const getEmp = async(req,resp)=>{
    try {
        const result = await empModel.find();
        resp.render("index",{result:result});
    } catch (error) {
        console.log(error);
    }
}

const addEmp = async(req,resp)=>{
  try {
      const data = new empModel({
        name:req.body.name,
        salary:req.body.salary
    })
    await data.save();
    resp.redirect("/")
  } catch (error) {
    console.log(error);
    
  }
}


  const delEmp = async(req,resp)=>{
    try {
        const result = await empModel.findByIdAndDelete(req.params.id);
        resp.redirect("/")
    } catch (error) {
        console.log(error);
    }
}


const showEditForm = async (req, res) => {
  try {
    const emp = await empModel.findById(req.params.id);
    res.render("edit", { emp});
  } catch (error) {
    console.log(error);
  }
};

const updateEmp = async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            salary: req.body.salary
        });
        res.redirect("/");
    } catch (error) {
        console.log(error);
        
    }
};




module.exports={getEmp,addEmp,delEmp,updateEmp,showEditForm}
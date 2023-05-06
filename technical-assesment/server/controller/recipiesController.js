const recipe = require("../model/recipiesModel")

const getRecepie = (req, res) => {
recipe.getAllReceipes((req, results) => 
    res.json(results)
)
}

const add = (req, res) => {
  recipe.postReceipe((err,result)=>{
    if(err) res.status(500).send(err)
    else res.status(200).send(result)
  },req.body)
}

const deleted = (req,res)=>{
  recipe.deleteReceipe((err,result)=>{
    if(err) res.status(500).send(err)
    else res.status(200).send(result)
  },[req.params.id])
}

const update = (req,res)=>{
  recipe.updateReceipe((err,result)=>{
    if(err) res.status(500).send(err)
    else res.status(200).send(result)
  },[req.body,req.params.id])
}



module.exports = {
  getRecepie,add,deleted,update
};
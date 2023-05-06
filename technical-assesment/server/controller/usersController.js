const user = require("../model/usersModel")

const getUser = (req, res) => {
user.getAllUsers((req, results) => 
    res.json(results)
)
}

const addUser = (req, res) => {
  user.postUser((err,result)=>{
    if(err) res.status(500).send(err)
    else res.status(200).send(result)
  },req.body)
}



module.exports = {
  getUser,addUser
};
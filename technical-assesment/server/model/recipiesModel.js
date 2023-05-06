const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();

const getAllReceipes = (callback) => {
    const sql='select * from recepie'
    connection.query(sql,(err,results)=>{
     callback(err,results)
    })
 };

 const getOneReceipe = (callback,body) => {
    const sql= 'SELECT * FROM recepie WHERE recepie_Name = ?'
    connection.query(sql,body,(err,results)=>{
     callback(err,results)
    })
 };
 const postReceipe = (callback,body) => {
    const sql= 'insert into recepie set ? '
    connection.query(sql,body,(err,results)=>{
     callback(err,results)
    })
 };
 const updateReceipe = (callback,id) => {
    const sql= 'update recepie set ? where recepie_Id=?'
    connection.query(sql,id,(err,results)=>{
     callback(err,results)
    })
 };
 const deleteReceipe = (callback,id)=>{
    const sql="delete from recepie where recepie_Id=?"
    connection.query(sql,id,function(err,res){
        callback(err,res)
    })
}



module.exports = {
    deleteReceipe,
    getAllReceipes,
    getOneReceipe,
    postReceipe,
    updateReceipe};
const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();

const getAllUsers = (callback) => {
    const sql='select * from users'
    connection.query(sql,(err,results)=>{
     callback(err,results)
    })
 };

 const getOneUser = (callback,body) => {
    const sql= 'SELECT * FROM users WHERE name = ?'
    connection.query(sql,body,(err,results)=>{
     callback(err,results)
    })
 };
 const postUser = (callback,body) => {
    const sql= 'insert into users set ? '
    connection.query(sql,body,(err,results)=>{
     callback(err,results)
    })
 };
 const updateUser = (callback,body) => {
    const sql= 'update users set ? where id=?'
    connection.query(sql,body,(err,results)=>{
     callback(err,results)
    })
 };
 const deleteUser = (callback,id)=>{
    const sql="delete from users where id=?"
    connection.query(sql,id,function(err,res){
        callback(err,res)
    })
}
    


module.exports = {
    deleteUser,
    getAllUsers,
    getOneUser,
    postUser,
    updateUser};
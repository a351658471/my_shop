var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
var User = require('../model/users')

mongoose.connect('mongodb://127.0.0.1:27017/demo01',{userNewUrlParser: true,userUnifiedTopology: true})

mongoose.connection.on('connected',()=>{
  console.log("数据库连接成功")
})
mongoose.connection.on('error',()=>{
  console.log('数据库连接失败')
})
mongoose.connection.on('disconnected',()=>{
  console.log('数据库断开连接')
})
router.post('/', (req, res, next)=> {
  let params = {
    userName: req.body.username,
    passWord:req.body.password
  }
  console.log(req.body)
  User.findOne(params,(err,doc)=>{
    if(!err){
      if(doc){
        res.json({
          status:0,
          msg:'',
          result:'登陆成功',
          userName:doc.userName,
        })
      }else{
        res.json({
          status:1,
          msg:'用户名或密码错误',
          result:''
        })
      }
    }
  })
});

module.exports = router;

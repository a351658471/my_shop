<template>
  <div class="login_container">
      <div class="login_box">
          <div class="login_head">
              <img src="@/assets/logo.png" alt="">
          </div>
          <div class="login_box">
              <el-form  class="login_form" ref="form" :rules="formRules" :model="form" label-width="">
                <el-form-item prop="username">
                    <el-input
                        class="einput"
                        placeholder="请输入用户名"
                        prefix-icon="iconfont icon-yonghu"
                        v-model="form.username">
                    </el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input
                        class="einput"
                        prefix-icon="iconfont icon-mobile"
                        type="password"
                        placeholder="请输入密码"
                        v-model="form.password">
                    </el-input>
                </el-form-item>

                <el-form-item class="login_button">
                    <el-button type="primary" @click="login">登陆</el-button>
                    <el-button type="primary" @click="formReset">重置</el-button>
                 </el-form-item >
              </el-form>
          </div>
          
      </div>
  </div>
</template>

<script>
import axios from'axios'
export default {
    data(){
        return{
            
            form:{
                username:'',
                password:'',
            },
            formRules:{
                username:[
                    {required: true, message:"请输入登录名称", trigger: "blur"},
                    {min: 3, max: 5, message:"长度在3 - 5个字符", trigger: "blur"}
                    ],
                
                password:[
                    {required: true, message:'请输入密码', trigger: 'blur'},
                    {min:5, max:10, message:"长度在6 - 10个字符",trigger: "blur"}
                ],
            }
        }
    },
    methods:{
        login(){
            console.log("登录")
            this.$refs.form.validate(valid =>{
                if(valid){
                    axios.post('/users',{
                        username:this.form.username,
                        password:this.form.password
                    }).then((res)=>{
                        if(res.data.status == 0){
                            this.msg = res.data.result;
                            window.sessionStorage.username = res.data.userName
                            this.$message({
                                type:'success',
                                showClose:true,
                                message:this.msg
                            })
                            this.$router.push('/home')
                        }else{
                            this.msg = res.data.msg
                            this.$message({
                                type:'error',
                                showClose:true,
                                message:this.msg
                            })
                        }
                    })
                }
            })
        },
        formReset(){
            this.$refs.form.resetFields();
        }
    }
}
</script>

<style scoped lang="less">
    .login_container{
        background-color: #2b4b6b;
        height: 100%;
    }
    .login_box{
        position: relative;
        background-color: #fff;
        width: 450px;
        height:300px;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%)
    }
    .login_head{
        z-index: 1;
        width: 130px;
        height: 130px;
        padding: 10px;
        border-radius: 50%;
        border: 1px solid #eee;
        box-shadow: 0 0 10px #ddd;
        background-color: #fff;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);

        img{
            background-color: #eee;
            border-radius: 50%;
            width: 130px;
            height: 130px;
            
        }
    }
    .login_form{
        position: absolute;
        top: 60%;
        width: 100%;
        transform: translateY(-50%);
        padding: 10px;
        box-sizing: border-box;
        
    }
    .login_button{
        display: flex;
        justify-content: flex-end
    }
</style>
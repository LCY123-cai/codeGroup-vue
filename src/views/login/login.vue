<template>
  <Form ref="loginForm" :model="loginForm" :rules="ruleValidate" :label-width="80">
    <FormItem label="学号" prop="account">
      <Input v-model="loginForm.account" placeholder="请输入学号"></Input>
      <Icon type="ios-person-outline" slot="prepend"></Icon>
    </FormItem>
    <FormItem label="密码" prop="password">
      <Input v-model="loginForm.password" placeholder="请输入密码" type="password"></Input>
      <Icon type="ios-locked-outline" slot="prepend"></Icon>
    </FormItem>
    <FormItem label="身份" prop="role">
      <RadioGroup v-model="loginForm.role">
        <Radio label="admin">管理员</Radio>
        <Radio label="user">普通用户</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('loginForm')">登陆</Button>
      <Button type="ghost" @click="handleReset('loginForm')" style="margin-left: 8px">重置</Button>
      <Button type="primary" @click="back()">返回</Button>
    </FormItem>
  </Form>
</template>
<script>
  import { userLogin,adminLogin } from '@/api/login';
  import {showUser} from "../../api/show";

  export default {
    data () {
      return {
        loginForm: {
          account: '',
          password: '',
          role: ''
        },
        ruleValidate: {
          account: [
            { required: true, message: '学号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          role: [
            { required: true, message: '请选择身份', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            if (this.loginForm.role === 'admin') {
              this.$store.dispatch('Login', this.loginForm)
                .then(() => {
                  this.$Message.success("登陆成功");
                  this.$router.push({name:'showOneAdmin'});
                })
            } else {
              this.$store.dispatch('Login', this.loginForm)
                .then(() => {
                  this.$Message.success("登陆成功");
                  this.$router.push({name:'showOneUser'});
                })
            }
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      back(){
        this.$router.back();
      }
    }
  }
</script>

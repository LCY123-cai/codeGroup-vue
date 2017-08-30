<template>
  <Form ref="loginForm" :model="loginForm" :rules="ruleValidate" :label-width="80">
    <FormItem label="学号" prop="account">
      <Input type="text" v-model="loginForm.account" />
    </FormItem>
    <FormItem label="密码" prop="password">
      <Input type="password" v-model="loginForm.password" />
    </FormItem>
            <FormItem label="身份" prop="role">
            <RadioGroup v-model="loginForm.role">
                <Radio label="admin">管理员</Radio>
                <Radio label="user">普通用户</Radio>
            </RadioGroup>
        </FormItem>
    <FormItem>
      <Button type="primary" @click="handleLogin()">登陆</Button>
      <Button type="ghost" @click="handleReset('loginForm')" style="margin-left: 8px">重置</Button>
      <Button type="primary" @click="back()">返回</Button>
    </FormItem>
  </Form>
</template>
<script>
  import { userLogin,adminLogin } from '@/api/login';
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
                },
            }
        },
    methods: {
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            if (this.loginForm.role === 'admin') {
              adminLogin(this.loginForm.account, this.loginForm.password)
                .then(() => {
                  this.$Message.success("登陆成功");
                }).catch(error => {
                this.$Message.error(error);
              });
            } else {
              userLogin(this.loginForm.account, this.loginForm.password)
                .then(() => {
                  this.$Message.success("登陆成功");
                }).catch(error => {
                this.$Message.error(error);
              });
            }
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      back() {
        this.$router.back();
      }
    }
  }
</script>

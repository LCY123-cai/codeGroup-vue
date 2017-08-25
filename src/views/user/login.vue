<template>
  <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
    <Form-item label="账号" prop="account">
      <Input type="text" v-model="formCustom.account" number />
    </Form-item>
    <Form-item label="密码" prop="password">
      <Input type="password" v-model="formCustom.password" />
    </Form-item>
    <Form-item>
      <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
      <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
      <Button type="primary" @click="back()">返回</Button>
    </Form-item>
  </Form>
</template>
<script>
  export default {
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('password');
          }
          callback();
        }
      };
      const validateAccount = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        // 模拟异步验证效果
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };

      return {
        formCustom: {
          account: '',
          password: ''
        },
        ruleCustom: {
          account: [
            { validator: validatePass, trigger: 'blur' }
          ],
          password: [
            { validator: validateAccount, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('表单验证失败!');
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

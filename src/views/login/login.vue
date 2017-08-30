<template>
  <Form ref="formCustom" :model="formCustom" :rules="ruleValidate" :label-width="80">
    <Form-item label="学号" prop="account">
      <Input type="text" v-model="formCustom.account" />
    </Form-item>
    <Form-item label="密码" prop="password">
      <Input type="password" v-model="formCustom.password" />
    </Form-item>
            <FormItem label="身份" prop="role">
            <RadioGroup v-model="formCustom.role">
                <Radio label="admin">管理员</Radio>
                <Radio label="user">普通用户</Radio>
              {{ formCustom.role }}
            </RadioGroup>
        </FormItem>
    <Form-item>
      <Button type="primary" @click="handleSubmit('formCustom')">登陆</Button>
      <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
      <Button type="primary" @click="back()">返回</Button>
    </Form-item>
  </Form>
</template>
<script>
  export default {
           data () {
            return {
                formCustom: {
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

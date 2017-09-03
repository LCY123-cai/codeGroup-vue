<template>
  <div>
  <div>
    <Button type="primary" @click="addUserModal = true">添加用户</Button>
    <Modal
      v-model="addUserModal"
      title="添加用户"
      @on-ok="addUser('formValidate')">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="手机号" prop="phone">
          <Input v-model="formValidate.phone" placeholder="请输入手机号"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input v-model="formValidate.password" placeholder="请输入密码" type="password"></Input>
        </FormItem>
        <FormItem label="学号" prop="studentNo">
          <Input v-model="formValidate.studentNo" placeholder="请输入学号"></Input>
        </FormItem>
        <FormItem label="姓名" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="性别" prop="sex">
          <RadioGroup v-model="formValidate.sex" style="width: 100%; text-align: left;">
            <Radio label="male">男</Radio>
            <Radio label="female">女</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="年级" prop="year">
          <Input v-model="formValidate.year" placeholder="请输入年级" ></Input>
        </FormItem>
        <FormItem label="专业" prop="major">
          <Input v-model="formValidate.major" placeholder="请输入专业"></Input>
        </FormItem>
        <FormItem label="邮箱" prop="mail">
          <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
        </FormItem>
        <FormItem label="所在地" prop="region">
          <Input v-model="formValidate.region" placeholder="请输入家乡所在地"></Input>
        </FormItem>
        <FormItem>
          <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>
    </Modal>
    <Button type="error" @click="deleteUserModal = true">删除用户</Button>
    <Modal
      v-model="deleteUserModal"
      title="删除用户"
      @on-ok="deleteUser">
      学号：
      <Input v-model="userStudentNo" placeholder="请输入用户的学号" style="width: 300px"></Input>
    </Modal>
  </div>
  <div>
    <Button type="primary" @click="addAdminModal = true">添加管理员</Button>
    <Modal
      v-model="addAdminModal"
      title="添加管理员">
      <Input v-model="value2" placeholder="请输入..." style="width: 300px"></Input>
    </Modal>
    <Button type="error" @click="deleteAdminModal = true">删除管理员</Button>
    <Modal
      v-model="deleteAdminModal"
      title="删除管理员"
      @on-ok="deleteAdmin">
      学号：
      <Input v-model="adminStudentNo" placeholder="请输入管理员的学号" style="width: 300px"></Input>
    </Modal>
  </div>
  </div>
</template>
<script>
  import { validatePhoneNumber } from '@/utils/validate';
  import { deleteUser, deleteAdmin } from '@/api/edit'
  import { register } from '@/api/register';
  export default {
    data () {
      const validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('手机号不能为空'))
        } else if (!validatePhoneNumber(value)) {
          callback(new Error('请输入正确的手机号'));
        } else {
          callback();
        }
      };
      return {
        addUserModal: false,
        addAdminModal: false,
        deleteAdminModal: false,
        deleteUserModal: false,
        adminStudentNo: '',
        userStudentNo: '',
        value1: '',
        value2: '',
        formValidate: {
          phone: '',
          password: '',
          studentNo: '',
          name: '',
          sex: '',
          year: '2015级',
          major: '',
          mail: '',
          region:'',
        },
        ruleValidate: {
          phone: [
            { required: true, trigger: 'blur', validator: validatePhone}
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          studentNo: [
            { required: true, message: '学号不能为空', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          year: [
            { required: true, message: '年级不能为空', trigger: 'blur' }
          ],
          major: [
            { required: true, message: '专业不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      deleteUser () {
        deleteUser(this.userStudentNo)
          .then(res => {
            this.$Message.success("删除成功");
          })
      },
      deleteAdmin () {
        deleteAdmin(this.adminStudentNo)
          .then(res => {
            this.$Message.success("删除成功");
          })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      addUser (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            const result = JSON.stringify(this.formValidate);
            register(result).then(res => {
              this.$Message.success("添加成功");
            }).catch((e)=>{
              console.log(error);
              this.$Message.error({
                content: "注册失败",
                duration: 1.5,
                closable: true
              })
            });
          }
        })
      },
    }
  }
</script>
<style scoped>
  div {
    text-align: left;
    margin: 20px;
  }
</style>

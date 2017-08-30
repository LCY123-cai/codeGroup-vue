<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="手机号" prop="phone">
        <Input v-model="formValidate.phone" placeholder="请输入手机号"></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input v-model="formValidate.password" placeholder="请输入密码"></Input>
      </FormItem>
      <FormItem label="学号" prop="studentNo">
        <Input v-model="formValidate.studentNo" placeholder="请输入学号"></Input>
      </FormItem>
      <FormItem label="姓名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="性别" prop="sex">
            <RadioGroup v-model="formValidate.sex" style="margin-left: -900px;">
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
            <Button type="primary" @click="handleSubmit()">提交</Button>
            <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            <Button type="primary" @click="back()">返回</Button>
        </FormItem>
    </Form>
</template>
<script>
import { validatePhoneNumber } from '@/utils/validate';
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
            handleSubmit () {
              this.$refs.formValidate.validate(valid => {
                    if (valid) {
                      const result = JSON.stringify(this.formValidate);
                      register(result).then(() => {
                        this.$Message.success("注册成功！");
                        }).catch(error => {
                        this.$Message.error(error);
                      });
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            back(){
                this.$router.back();
            },
            /*created() {
              this.fetchData();
            }*/
        }
    }
</script>

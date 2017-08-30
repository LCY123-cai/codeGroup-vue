<template>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="姓名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="性别" prop="gender">
            <RadioGroup v-model="formValidate.gender">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="年龄" prop="age">
            <Input v-model="formValidate.age" placeholder="请输入年龄"></Input>
        </FormItem>
        <FormItem label="年级" prop="year">
            <Input v-model="formValidate.year" placeholder="请输入年级" ></Input>
        </FormItem>
        <FormItem label="专业" prop="major">
            <Input v-model="formValidate.major" placeholder="请输入专业"></Input>
        </FormItem>
        <FormItem label="手机号" prop="tel">
            <Input v-model="formValidate.tel" placeholder="请输入手机号"></Input>
        </FormItem>
        <FormItem label="邮箱" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
        </FormItem>
        <FormItem label="所在地" prop="ragion">
            <Input v-model="formValidate.ragion" placeholder="请输入家乡所在地"></Input>
        </FormItem>
        <FormItem label="注册日期">
            <Row>
                <Col span="11">
                    <FormItem prop="date">
                        <DatePicker type="date" placeholder="选择日期" v-model="formValidate.date"></DatePicker>
                    </FormItem>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <FormItem prop="time">
                        <TimePicker type="time" placeholder="选择时间" v-model="formValidate.time"></TimePicker>
                    </FormItem>
                </Col>
            </Row>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
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
                    name: '',
                    gender: '',
                    age:'',
                    year:'',
                    major:'',
                    tel:'',
                    mail: '',
                    ragion:'',
                    date: '',
                    time: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    age: [
                        { required: true, message: '年龄不能为空', trigger: 'blur' }
                    ],
                    year: [
                        { required: true, message: '年级不能为空', trigger: 'blur' }
                    ],
                    major: [
                        { required: true, message: '专业不能为空', trigger: 'blur' }
                    ],
                    tel: [
                        {required: true, trigger: 'blur', validator: validatePhone}
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    ragion: [
                        { required: true, message: '所在地不能为空', trigger: 'blur' }
                    ],
                    
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                            //this.$Message.success('提交成功!');
                            /*fetchData() {
                              register().then(res => {
                                this.tableData = res.data;
                              })
                          }*/
                    } else {
                        this.$Message.error('表单验证失败!');
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

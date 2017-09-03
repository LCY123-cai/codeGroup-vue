<template>
  <div>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="5"></Col>
      <Col span="5">姓名：{{ name }}</Col>
      <Col span="12">手机号：{{ phone }}</Col>
    </Row>
    <br>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="5"></Col>
      <Col span="5">学号：{{ studentNo }}</Col>
      <Col span="12">性别：{{ sex }}</Col>
    </Row>
    <br>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="5"></Col>
      <Col span="5">积分：{{ rank }}</Col>
      <Col span="12">家乡：{{ region }}</Col>
    </Row>
    <br>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="5"></Col>
      <Col span="5">专业：{{ major }}</Col>
      <Col span="12">年级：{{ year }}</Col>
    </Row>
    <br>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="5"></Col>
      <Col span="5">邮箱：{{ mail }}</Col>
      <Col span="12">QQ：{{ qq }}</Col>
    </Row>
  </div>
</template>

<script>
  import { showOneUser } from '@/api/show';
  export default {
    data() {
      return {
        name: '',
        phone: '',
        studentNo: '',
        sex: '',
        rank: '',
        region: '',
        major: '',
        year: '',
        mail: '',
        qq: ''
      }
    },
    created() {
      this.showInfo();
    },
    methods: {
      showInfo() {
        showOneUser().then(res => {
          this.name = res.data.name;
          this.phone = res.data.phone;
          this.studentNo = res.data.studentNo;
          this.sex = res.data.sex;
          this.rank = res.data.rank;
          this.region = res.data.region;
          this.major = res.data.major;
          this.year = res.data.year;
          this.mail = res.data.mail;
          this.qq = res.data.qq;
        })
      }
    }
  }
</script>
<style scoped>
  div {
    text-align: left;
  }
</style>


<template>
    <div>
      <Row type="flex" justify="start" class="code-row-bg">
        <Col span="6">姓名：{{ name }}</Col>
        <Col span="12">手机号：{{ phone }}</Col>
      </Row>
      <br>
      <Row type="flex" justify="start" class="code-row-bg">
        <Col span="7">学号：{{ studentNo }}</Col>
        <Col span="9">职务：{{ position }}</Col>
      </Row>
      <br>
      <Row type="flex" justify="start" class="code-row-bg">
        <Col span="6">年级：{{ year }}</Col>
      </Row>
    </div>
</template>

<script>
  import { showOneAdmin } from '@/api/show';
	export default {
    data() {
      return {
        position: '',
        studentNo: '',
        name: '',
        year: '',
        phone: ''
      }
    },
    created() {
      this.showInfo();
    },
    methods: {
      showInfo() {
        showOneAdmin().then(res => {
            this.position = res.data.position === 1 ? '会长' : (res.data.position === 2 ? '副会长' : '部门部长'),
            this.studentNo = res.data.studentNo,
            this.name = res.data.name,
            this.year = res.data.year + '级',
            this.phone = res.data.phone
        })
      }
    }
  }
</script>


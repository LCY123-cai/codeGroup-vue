<style scoped>
  .expand-row{
    margin-bottom: 16px;
  }
</style>
<template>
  <div>
    <Row class="expand-row">
      <Col span="12">
      <span class="expand-key">专业：</span>
      <span class="expand-value">{{ row.major }}</span>
      </Col>
      <Col span="12">
      <span class="expand-key">年级：</span>
      <span class="expand-value">{{ row.year }}</span>
      </Col>
    </Row>
    <Row>
      <Col span="12">
      <span class="expand-key">性别：</span>
      <span class="expand-value">{{ row.sex }}</span>
      </Col>
      <Col span="12">
      <span class="expand-key">注册日期：</span>
      <span class="expand-value">{{ row.registerTime | timeFilter }}</span>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    props: {
      row: Object
    },
    filters: {
      timeFilter(time) {
        const isTensDigit = function(num) {
          if (num < 10) {
            return '0' + num;
          } else {
            return num;
          }
        }
        const date = new Date(time);
        const year = date.getFullYear();
        const month = isTensDigit(date.getMonth() + 1);
        const day = isTensDigit(date.getDate());
        const hours = isTensDigit(date.getHours());
        const minutes = isTensDigit(date.getMinutes());
        const seconds = isTensDigit(date.getSeconds());
        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
      }
    },
  };
</script>

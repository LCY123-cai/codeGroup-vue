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
    <Row class="expand-row">
      <Col span="12">
      <span class="expand-key">性别：</span>
      <span class="expand-value">{{ row.sex }}</span>
      </Col>
      <Col span="12">
      <span class="expand-key">注册日期：</span>
      <span class="expand-value">{{ row.registerTime | formatDate }}</span>
      </Col>
    </Row>
    <Row class="expand-row">
      <Col span="12">
      <span class="expand-key">电话：</span>
      <span class="expand-value">{{ row.phone }}</span>
      </Col>
      <Col span="12">
      <span class="expand-key">qq号：</span>
      <span class="expand-value">{{ row.qq }}</span>
      </Col>
    </Row>
  </div>
</template>
<script>
  import {formatDate} from '@/utils/date';
  export default {
    props: {
      row: Object
    },
    filters: {
        formatDate(time) {
          var date = new Date(time);
          return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    },
  };
</script>
<style scoped>
  .expand-row{
    margin-bottom: 16px;
  }
</style>

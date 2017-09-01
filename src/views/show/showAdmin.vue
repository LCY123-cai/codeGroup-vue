<template>
  <Table height="200" :columns="columns" :data="adminForm"></Table>
</template>
<script>
  import { showAdmin } from '@/api/show';
  export default {
    data () {
      return {
        columns: [
          {
            title: '学号',
            key: 'studentNo'
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '职位',
            key: 'position'
          }
        ],
        adminForm: []
      }
    },
    filters: {
      positionFilter(value) {//职位 1 会长 2 副会长 3 部门部长
        if (value === 1) {
          return '会长'
        } else if (value === 2) {
          return '副会长'
        } else if (value === 3) {
          return '部门部长'
        }
      }
    },
    methods: {
      showAdminList() {
        showAdmin()
          .then(res => {
            for(var i = 0; i < res.data.length; i++) {
              this.adminForm.push({
                position: res.data[i].position === 1 ? '会长' : (res.data[i].position === 2 ? '副会长' : '部门部长'),
                studentNo: res.data[i].studentNo,
                name: res.data[i].name
              });
            }
//            this.adminForm = res.data;
            console.log(this.adminForm);
          })
      }
    },
    created() {
      this.showAdminList();
    }
  }
</script>

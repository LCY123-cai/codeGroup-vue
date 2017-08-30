<template>
  <div class="hello">
    <img src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h2>Developer：Stalary，Bella</h2>
    <Button type="info" @click="login()">登陆</Button>
    <Button type="info" @click="handleSubmit()">注册</Button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '阿尔法程序协会人员管理系统',
    }
  },
  methods: {

    login() {
      var self = this;
      self.$router.push({name:'login'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  margin: 20px;
}
</style>

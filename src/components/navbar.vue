<!--借方和贷方显示的导航菜单栏 -->
<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    border-bottom: none;
    /*background: #f5f7f9;*/
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-content-main .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    /*min-width: 300px;*/
    min-height: 200px;
    margin: 10px;
    /*background: #fff;*/
    border-radius: 4px;
  }

  .layout-content-main {
    /*padding: 10px;*/
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    background: #464c5b;
  }

  .layout-header {
    /*height: 60px;*/
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
    text-align: center;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text {
    opacity: 0;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .nav-button {
    position: fixed;
    top: 50%;
  }

</style>
<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 8}">
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left" :style="{ height: pageHeight }">
      <Menu theme="dark" width="auto" :open-names="['1','2']">
        <div class="layout-logo-left">
        </div>
        <!--借款企业-->
        <div v-show="userType == 3">
          <!-- <Submenu name="1"> -->
          <!-- <template slot="title">
                    我要借款
                  </template> -->
          <Menu-group title="我要借款">
            <router-link to="/BorrowUser/ApplyTip">
              <Menu-item name="1-1">1&nbsp;填写材料</Menu-item>
            </router-link>
            <router-link :to="{name:'Reservation'}">
              <Menu-item name="1-2">2&nbsp;办理核实</Menu-item>
            </router-link>
            <router-link :to="{name:'ConfirmBill'}">
              <Menu-item name="1-3">3&nbsp;确认对账</Menu-item>
            </router-link>
            <router-link :to="{name:'ViewPrice'}">
              <Menu-item name="1-4">4&nbsp;报价管理</Menu-item>
            </router-link>
            <router-link :to="{name:'BorrowHandleLoans'}">
              <Menu-item name="1-5">5&nbsp;办理放贷</Menu-item>
            </router-link>
            <!-- </Submenu> -->
          </Menu-group>
          <!-- <Submenu name="2">
                  <template slot="title">
                    我的账户
                  </template> -->
          <!-- BorrowLoanManagement -->
          <Menu-group title="我的账户">
            <router-link :to="{name:'BorrowLoanManagementList'}">
              <Menu-item name="2-1">6&nbsp;贷后管理</Menu-item>
            </router-link>
            <router-link :to="{name:'BorrowPayInfo'}">
              <Menu-item name="2-2">7&nbsp;付费记录</Menu-item>
            </router-link>
            <router-link :to="{name:'BorrowNotification'}">
              <Menu-item name="2-3">8&nbsp;系统通知
                <span style="color:red;" v-if="readed"> ●</span>
              </Menu-item>
            </router-link>
          </Menu-group>
          <!-- </Submenu> -->
        </div>
      </Menu>
      </Col>
      <i-col :span="spanRight">
        <div class="layout-header">
          <i-button type="text" @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </i-button>
          <i-button type="text" @click="toggleClick" class="nav-button" v-if="showArray">
            <Icon type="chevron-left" size="32" v-show="showNav"></Icon>
            <Icon type="chevron-right" size="32" v-show="!showNav"></Icon>
          </i-button>
          <span>{{navInfo}}</span>
          <a>
            <span style="float: right; padding: 1rem" @click="loginOut">退出登录</span>
          </a>
        </div>
        <div style="text-align: left;margin-top: .5rem">

          <!-- <Button type="ghost" @click="routerBack">
                <Icon type="chevron-left"></Icon>
              </Button>
     -->
          <!-- <Button-group>
                  <Button type="ghost" @click="routerGo">
                    <Icon type="chevron-left"></Icon>
                    前进
                  </Button>
                <Button type="ghost" @click="routerBack">
                  后退
                  <Icon type="chevron-right"></Icon>
                </Button>
              </Button-group> -->
        </div>
        <div class="layout-content" :style="{minWidth:pageWidth}">
          <div class="layout-content-main">
            <Row type="flex" justify="center">
              <Col :xs="24" :sm="24" :md="24" :lg="18">
              <router-view></router-view>
              </Col>
            </Row>
          </div>
        </div>
        <div class="layout-copy">
        </div>

      </i-col>
    </Row>
    <Back-top></Back-top>
  </div>
</template>
<script>
//  import Utils from '../utils'
//  import API from '../api'
  export default {
    data() {
      return {
        showArray: true,
        showNav: false,
        readed: false,
        spanLeft: ``,
        spanRight: '24',
        pageHeight: `${document.body.scrollHeight}px`,
        userType: '',
        pageWidth: `${document.body.offsetWidth - 20}px`,
        navInfo: '导航'
      }
    },
    mounted() {
      this.spanLeft = '0';
      this.spanRight = 24;
    },
    methods: {
      toggleClick() {
        this.showNav = !this.showNav;
        let screenWidth = window.screen.width;
        if (this.spanLeft == 0) {
          if (screenWidth > 992) {
            this.spanLeft = 5;
            this.spanRight = 19;
          } else {
            this.spanLeft = 8;
            this.spanRight = 16;
          }
        } else {
          this.spanLeft = '0';
          this.spanRight = 24;
        }
      },
      loginOut() {
        localStorage.setItem('token', '');
        localStorage.setItem('userType', '-1');
        this.$router.push({ name: 'Login' });
      },
      getPhoneNum() {
        Utils.post(API.getPhoneNum).then((res) => {
          console.log(res);
          if (res.code == 1) {
            this.navInfo = res.data;
          }
        })
      },
      existUnread() {
        let self = this;
        Utils.post(API.notification.existUnread)
          .then((res) => {
            if (res.code == 1) {
              self.readed = res.data;
            }
          })
      },
      routerGo() {
        this.$router.go(1);
      },
      routerBack() {
        this.$router.back();

      }
    }
  }
</script>


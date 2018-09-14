<template>
<div>
    <Sidebar class="sidebar-container" :get-active="isActive"/>
    <div class="main-container">
      <mu-appbar color="primary">
        <mu-button icon slot="left" :class="{ active: isActive }" @click="toggleClick">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        <mu-menu slot="right" open-on-hover>
          <mu-button flat>
            <mu-avatar>
              <img src="../assets/images/2.jpg">
            </mu-avatar>
          </mu-button>
          <mu-list slot="content">
            <mu-list-item button>
              <mu-list-item-content>
                <mu-list-item-title>我的消息</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-content>
                <mu-list-item-title>设置</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-content>
                <mu-list-item-title @click.native="logout">退出登录</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
          </mu-list>
        </mu-menu>
      </mu-appbar>
    </div>
</div>
</template>

<script>
import Sidebar from '../components/layouts/Sidebar'
export default {
  name: 'Home',
  components :{
    Sidebar,
  },
  data () {
    return {
      isActive: false,
    }
  },
  methods:{
    toggleClick () {
      this.isActive =  !this.isActive;
    }
  }
}
</script>

<style scoped>
  .main-container {
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: 180px;
    position: relative;
  }
  .sidebar-container {
    transition: width 0.28s;
    width: 180px !important;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
}

.active {
  transform: rotate(90deg);
}
</style>

<template>
  <el-container class="main-container">
    <el-aside width='180px' class="main-aside">
      <div class="logo">
        <h1>云点通信管理系统</h1>
      </div>
      <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#181F35"
      text-color="#fff"
      :router="true"
      active-text-color="#339FFD">
        <el-menu-item index="/center/index">
          <i class="el-icon- iconfont icon-homepagenormal"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon- iconfont icon-customs-clearance"></i>
            <span>通信管理</span>
          </template>
          <el-menu-item index="/center/list">分机管理</el-menu-item>
          <el-menu-item index="/center/list">技能组管理</el-menu-item>
          <el-menu-item index="/center/list">语音管理</el-menu-item>
          <el-menu-item index="/center/list">IVR流程</el-menu-item>
          <el-menu-item index="/center/list">评价设置</el-menu-item>
        </el-submenu>
        <el-menu-item index="/center/list">
          <i class="el-icon- iconfont icon-security"></i>
          <span slot="title">系统监控</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon- iconfont icon-templatedefault"></i>
          <span slot="title">记录明细</span>
        </el-menu-item>
        <el-menu-item index="/center/list">
          <i class="el-icon- iconfont icon-data"></i>
          <span slot="title">统计分析</span>
        </el-menu-item>
        <el-menu-item index="/center/list">
          <i class="el-icon- iconfont icon-viewgallery"></i>
          <span slot="title">系统设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container class="main-body">
      <el-header class="main-header">
        <div>
          <img src='http://iconfont.alicdn.com/t/1508911280546.jpg@100h_100w.jpg' class="avatar">
          <el-dropdown trigger="click">
            <div class="el-dropdown-link">
              下拉菜单
              <i class="iconfont icon-category"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main class='ui-main'>
        <div class="main-panel">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="less">
.ui-main {
  padding: 15px;
}
.main-container {
  height: 100%;
  min-width: 1366px;
  margin: 0 auto;
}
.main-aside {
  background: #181f35;
  color: #fff;
  width: 180px;
}
.logo {
  background-color: #131828;
  color: #fff;
  width: 180px;
  line-height: 60px;
  height: 60px;
  text-align: center;
  font-size: 16px;
}
.el-menu-vertical {
  border-right: 0;
  .el-submenu .el-menu-item {
    text-indent: 14px;
    min-width: auto;
    font-size: 12px;
    height: 36px;
    line-height: 36px;
    &.is-active {
      background: #131828;
    }
  }
}
.main-header {
  background: #fff;
  line-height: 60px;
  font-size: 14px;
  text-align: right;
  .iconfont {
    font-size: 20px;
    font-weight: bold;
    vertical-align: middle;
  }
  .avatar {
    height: 40px;
    width: 40px;
    border-radius: 40px;
    background: #fff;
    line-height: 1;
    vertical-align: middle;
  }
}
.main-body {
  .el-main {
    overflow: auto;
  }
}
</style>



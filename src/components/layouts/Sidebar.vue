<template>
  <mu-drawer :open="!getActive" :right="false" :docked="true" z-depth=1 class="sidebar">
      <div class="sidebar-avatar">
        <mu-avatar size="64" color="primary">
          <img src="../../assets/images/1.jpg">
        </mu-avatar>
      </div>
      <mu-list class="sidebar-menu">
        <mu-divider />
        <mu-list-item button>
          <mu-button icon>
            <mu-icon value="home"></mu-icon>
          </mu-button>
          <mu-list-item-title>dashboard</mu-list-item-title>
        </mu-list-item>
        <mu-divider />
        <mu-list-item button>
          <mu-list-item-title>Menu</mu-list-item-title>
        </mu-list-item>
        <mu-divider />
      </mu-list>
    </mu-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  props:['getActive']
}
</script>

<style scoped>
.sidebar-avatar {
  background-color:#2196f3;
}
.sidebar-menu {
  padding-top: 0px;
}
</style>


<template>
  <mu-drawer :open="!getActive" :right="false" :docked="true" z-depth=4>
      <mu-list>
        <mu-list-item button>
          <mu-list-item-title>Menu</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Menu</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  props:['getActive']
}
</script>



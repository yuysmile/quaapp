<template>
  <div slot="left"  class="left-menu">
    <q-tabs color="blue-grey-3" class='select-bar' id="tabs">
	    <q-tab slot="title" name="tab-1" icon="message" @click="go('/analysis/content')">数据获取</q-tab>
	  	  <q-tab slot="title" name="tab-4" icon="accessibility" @click="go('/analysis/content/sensor')">数据分析</q-tab>
	    <q-tab slot="title" name="tab-5" icon="account circle" @click="go('/analysis/content/my')">个人中心</q-tab>
    </q-tabs>
  </div>
</template>
<script>
export default{
  data () {
    return {
    }
  },
  methods: {
    go (url) {
      this.$router.push({path: url})
    }
  }
}
</script>
<style>
  
</style>
<template>
  <div slot="left"  class="left-menu">
    <q-list no-border link inset-delimiter>
      <q-list-header style='background:'>传感器数据分析 <spanstyle="float:right;margin-right:10px;">></span></q-list-header>
      <q-item @click="launch('http://quasar-framework.org')">
        <q-item-side icon="school" />
        <q-item-main label="个人数据中心"/>
      </q-item>
      <q-item @click="launch('http://forum.quasar-framework.org')">
        <q-item-side icon="record_voice_over" />
        <q-item-main label="设置"/>
      </q-item>
      <q-item @click="launch('https://gitter.im/quasarframework/Lobby')">
        <q-item-side icon="chat" />
        <q-item-main label="数据表分析"/>
      </q-item>
      <q-item @click="launch('https://twitter.com/quasarframework')">
        <q-item-side icon="rss feed" />
        <q-item-main label="退出登陆"/>
      </q-item>
    </q-list>
    <!-- Tabs - notice slot="title" -->
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
      left: false
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
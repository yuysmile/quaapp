<template>
  <div slot="left" v-if="left" class="left-menu">
    <q-list no-border link inset-delimiter>
      <q-list-header style='background:'>传感器数据分析 <span @click="rotate" style="float:right;margin-right:10px;">></span></q-list-header>
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
  </div>
</template>
<script>

</script>
<style>
  
</style>
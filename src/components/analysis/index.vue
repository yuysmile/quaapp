<template>
  <div>
    <q-toolbar color="secondary">
	  <q-toolbar-title>
      <span style="fontSize:1rem;">传感器数据获取</span>
	  </q-toolbar-title>
	  <q-btn flat round small>
	    <q-icon name="account circle" />
	  </q-btn>
	</q-toolbar>
<!-- 左侧菜单 -->
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

<!-- 主页下侧的内容 -->
	<div>
	    <q-card>
            <q-card-main>
				加速度传感器
            </q-card-main>
        </q-card>
        <q-card>
            <q-card-main>
				重力传感器
            </q-card-main>
        </q-card>
        <q-card>
            <q-card-main>
				陀螺仪传感器
            </q-card-main>
        </q-card>
        <q-card>
            <q-card-main>
				旋转向量
            </q-card-main>
        </q-card>
        <q-card>
            <q-card-main>
				距离传感器
            </q-card-main>
        </q-card>
	</div>
	<q-tabs color="blue-grey-3" class='select-bar'>
	  <!-- Tabs - notice slot="title" -->
	  <q-tab default count="5" slot="title" name="tab-1" icon="message" />
	  <q-tab disable slot="title" name="tab-2" icon="fingerprint" />
	  <q-tab alert slot="title" name="tab-3" icon="account_box" />
	  <q-tab slot="title" name="tab-4" icon="accessibility" />
	  <q-tab slot="title" name="tab-5" icon="build" />
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
    rotate () {
      this.left = !this.left
    }
  }
}
</script>

<style lang="stylus">
.left-menu
  z-index: 999
  position: absolute
  background: white
  left: 0px
  top: 0px
  width: 100%
  height: 100%
.select-bar
  position: absolute
  bottom: 0px
  width: 100%
</style>

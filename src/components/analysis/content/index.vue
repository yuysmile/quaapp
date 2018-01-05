<template>
  <div>
    <q-toolbar color="teal-8">
	  <q-toolbar-title>
      <span style="fontSize:1rem;">传感器数据获取</span>
	  </q-toolbar-title>
	  <q-btn flat round small>
	    <q-icon name="build" />
	  </q-btn>
	</q-toolbar>
<!-- 主页下侧的内容 -->
	<div class="content">
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
        <q-card>
            <q-card-main>
				光照传感器
            </q-card-main>
        </q-card>
        <q-card>
            <q-card-main>
				位置传感器
            </q-card-main>
        </q-card>
        <q-card>
            <q-card-main>
				声压传感器
            </q-card-main>
        </q-card>
	</div>
	<q-tabs color="blue-grey-3" class='select-bar'>
	  <!-- Tabs - notice slot="title" -->
	  <q-tab default count="5" slot="title" name="tab-1" icon="message" @click="go('/analysis/content/index')">数据获取</q-tab>
	  <!-- <q-tab disable slot="title" name="tab-2" icon="fingerprint" /> -->
	 <!--  <q-tab alert slot="title" name="tab-3" icon="account_box" /> -->
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

<template>
  <div>
    <q-toolbar color="teal-8" id="bar" class="bar">
  	  <q-toolbar-title>
        <span style="fontSize:1rem;">传感器数据获取</span>
  	  </q-toolbar-title>
  	  <!--<q-btn flat round small>
  	    <q-icon name="build" />
  	  </q-btn>-->
	  </q-toolbar>
    <!-- 主页下侧的内容 -->
    <q-scroll-area  id="content">
      <div class="content" id="content">
          <q-card>
            <q-card-main class="long">
              <span class="image" style="background-Image:url(../../statics/加速度.jpg);"></span>
              <span class="font">加速度传感器</span>
              <span @click="go('content/detail/acceleration')" class="detail">查看</span>
            </q-card-main>
            </q-card>
            <q-card>
                <q-card-main class="long"><span class="image"  style="background-Image:url(../../statics/重力.jpg);"></span>
                  <span class="font">重力传感器</span>
                  <span @click="go('content/detail/gravity')" class="detail">查看</span>
                </q-card-main>
            </q-card>
            <q-card>
                <q-card-main class="long"><span class="image" style="background-Image:url(../../statics/陀螺仪.jpg);"></span>
            <span class="font">陀螺仪传感器</span>
            <span @click="go('content/detail/gyroscope')" class="detail">查看</span>
                </q-card-main>
            </q-card>
            <q-card>
                <q-card-main class="long"><span class="image" style="background-Image:url(../../statics/旋转.jpg);"></span>
            <span class="font">旋转向量</span>
            <span @click="go('content/detail/rotate')" class="detail">查看</span>
                </q-card-main>
            </q-card>
            <q-card>
                <q-card-main class="long"><span class="image" style="background-Image:url(../../statics/直尺.jpg);"></span>
            <span class="font">距离传感器</span>
            <span @click="go('content/detail/distance')" class="detail">查看</span>
                </q-card-main>
            </q-card>
            <q-card>
                <q-card-main class="long">
                  <span class="image" style="background-Image:url(../../statics/灯泡.jpg);"></span>
            <span class="font">光照传感器</span>
            <span @click="go('content/detail/Illumination')" class="detail">查看</span>
                </q-card-main>
            </q-card>
            <q-card>
                <q-card-main class="long">
                  <span class="image" style="background-Image:url(../../statics/GPS.png);"></span>
            <span class="font">位置传感器</span>
            <span @click="go('content/detail/GPS')" class="detail">查看</span>
                </q-card-main>
            </q-card>
            <q-card>
                <q-card-main class="long">
                  <span class="image" style="background-Image:url(../../statics/声音.jpg);"></span>
            <span class="font">声压传感器</span>
            <span @click="go('content/detail/sound')" class="detail">查看</span>
                </q-card-main>
            </q-card>
        </div>
    </q-scroll-area>
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
    },
    auto () {
      var content = document.getElementById('content')
      var Height = document.documentElement.clientHeight
      var barheight = document.getElementById('bar').style.height
      var tabsheight = document.getElementById('tabs').style.height
      content.style.height = Height - barheight - tabsheight + 'px'
    }
  },
  mounted () {
    this.auto()
  }
}
</script>

<style lang="stylus">
#bar
  position: fixed
  top: 0px
  left: 0px
#content
  width: 100%
  position:absolute
  top: 25px
.select-bar
  position: fixed
  bottom: 0px
  width: 100%
.long
  height: 68px
.image
  display:block
  width:40px
  height:40px
  float:left
  border-radius: 5px
.font
  line-height: 40px
  margin-left: 12px
.detail
  float: right
  margin-top: 25px
  color: red
  fontSize: 1rem
</style>

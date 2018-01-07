<template>
  <div slot="left"  class="left-menu">
	  	<div class="title" style="display: block;position:absolute;left:50%;top: 10%;transform: translate(-50%,-50%);width: 78px;height: 78px;border:1px solid #ADADAD;border-radius:100%;">
	    <img :src='image' width="78px" height="70px"/>
	  	</div>
	  	<div style="position:absolute;top: 120px;">
	  	  <q-list no-border link inset-delimiter>
	      <q-item @click="" class="quote">
	        <q-item-side icon="school" />
	        <q-item-main label="我的传感器"/>
	      </q-item>
	      <q-item @click="" class="quote">
	        <q-item-side icon="record_voice_over" />
	        <q-item-main label="关于"/>
	      </q-item>
	      <q-item @click="" class="quote">
	        <q-item-side icon="chat" />
	        <q-item-main label="退出"/>
	      </q-item>
    		</q-list>
	  	</div>
    <q-tabs color="blue-grey-3" class='select-bar' id="tabs">
	    <q-tab slot="title" name="tab-1" icon="message" @click="go('/analysis/content')">数据获取</q-tab>
	  	  <q-tab slot="title" name="tab-4" icon="accessibility" @click="go('/analysis/content/sensor')">数据分析</q-tab>
	  	  <q-tab slot="title" name="tab-5" icon="account circle" @click="go('/analysis/content/my')">个人中心</q-tab>
		</q-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      image: '../../statics/person.png'
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
.select-bar
  position: absolute
  bottom: 0px
  width: 100%
.title
  display: block
  width: 100%
  height: 10px
.quote
   border-bottom: 1px rgb(239,239,239)
</style>
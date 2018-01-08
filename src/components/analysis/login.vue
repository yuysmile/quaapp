<template>
  <div style=" width:100%;height:100%;position:fixed;background-image: url(../../statics/3.jpg);background-size: cover;overflow: hidden;" id="login">
    <div style="width: 100%;position: fixed;top: 0px;height: 30%;border; 1px solid black;">
      <div>
        	<img :src='image' width="110px" height="100px" style="position: absolute;left: 50%;top: 40%;transform: translate(-50%,-20%);"/>
      </div>
      <div style="width: 100%;height: 40px;line-height: 40px;margin-top: 45%;color: #2F4F4F;font-size: 20px;text-align: center;">人体行为数据分析</div>
    </div>
    <section  style="width: 70%;margin-left: 15%;position: absolute;top: 40%;">
      <q-input v-model="name" float-label="用户名:" placeholder="请输入用户名"/>
      <q-input v-model="pwd" float-label="密码:" placeholder="请输入密码" />
      <div style="margin-top: 60px;">
        <q-btn loader @click="clickMethod" color="cyan-7" style="margin-left: 15px;width: 33%;">登陆
	      <span slot="loading">Loading...</span>
		    </q-btn>
		    <q-btn  @click="cancle" color="blue-grey-3" style="float: right;margin-right: 15px;width: 33%;">取消
		    </q-btn>
		    <br />
		    <p @click="go('/analysis/content')" style="margin-top: 20px;text-align: center;color: gray;text-decoration:underline;">游客模式</p>
    		</div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      pwd: '',
      submit: '',
      image: '../../statics/person.png'
    }
  },
  methods: {
    go (url) {
      this.$router.push({path: url})
    },
    clickMethod () {
    },
    cancle () {
      this.name = ''
      this.pwd = ''
    }
  }
}
</script>
<style lang="stylus">
.login
  border: 1px solid black
  display: block
  width: 100%
  background-image: url(../../statics/3.jpg)
</style>
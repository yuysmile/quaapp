<template>
  <div>
    <div id="login">
        <q-input v-model="name" stack-label="Stack Label" />
        <q-input v-model="pwd" float-label="Float Label" placeholder="Gigi" />
    </div>
    <q-btn loader @click="clickMethod" color="teal-6">
    Button Label
    <span slot="loading">Loading...</span>
  </q-btn>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      pwd: '',
      submit: ''
    }
  },
  methods: {
    auto () {
      let login = document.getElementById('login')
      login.style.height = document.documentElement.clientHeight
    },
    clickMethod () {
    }
  },
  mounted () {
    this.auto()
  }
}
</script>
<style lang="stylus">
.login
  width: 80%
  background-image: url(../../statics/3.jpg)
</style>
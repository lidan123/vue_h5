<template>
  <div id="app">
    <img src="./assets/logo.png">

    <div id="qrcode">二维码生成的位置</div>
    <router-view></router-view>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: 0,
      size: 150
    }
  },
  methods: {
    qrcode () {
      let qrcode = new QRCode('qrcode', {
        width: 100,
        height: 100, // 高度  [图片上传失败...(image-9ad77b-1525851843730)]
        text: 'https://mp.csdn.net/postedit/83183772' // 二维码内容
      })
      console.log(qrcode)
    }
  },
  mounted () {  //调用
    this.qrcode()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

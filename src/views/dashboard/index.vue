<template>
  <div class="app-container">
    首页</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'dashboard',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    axios({
      url: 'http://localhost/getMenu',
      method: 'get'
    }).then(data=>{
      console.log(data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

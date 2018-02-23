<template>
  <div class="app-container">
    <button type="button" @click="download">下载</button>
  </div>
</template>

<script>
import axios from 'axios'
import JsZip from 'jszip'
import FileSaver from 'file-saver'
import moment from 'moment'
export default {
  name: 'jsZip',
  data () {
    return {
      msg: 'jsZip'
    }
  },
  methods: {
    download(){
      let data = ['http://localhost:8080/static/bg.jpg', 'http://localhost:8080/static/bg1.jpg'];
      let zip = new JsZip()
      let cache = {}
      let promises = []
      data.forEach(item => {
        let promise = this.getFile(item).then(data => {
          console.log(data, 'data');
          let arr_name = item.split('/')
          let file_name = arr_name[arr_name.length - 1]
          zip.file(file_name, data, {binary: true})
          cache[file_name] = data
        })
        promises.push(promise)
      })
      Promise.all(promises).then(() => {
        console.log(zip, 'zip')
        zip.generateAsync({type: 'blob'}).then(content => {
          console.log(content, 'content')
          FileSaver.saveAs(content, '打包下载' + moment().format('X'))
        })
      })
    },
    // 下载文件
    getFile(url){
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: url,
          responseType: 'arraybuffer'
        }).then(data => {
          resolve(data.data)
        }).catch(error => {
          reject(error.toString())
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

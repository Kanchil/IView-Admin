<template>
  <div class="app-container">
    <quill-editor
      :options="editorOption"
      v-model="content"></quill-editor>
    <!-- 文件上传input 将它隐藏-->
    <Upload action="//jsonplaceholder.typicode.com/posts/">
      <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
    </Upload>
  </div>
</template>

<script>
  import Quill from 'quill';
  import {ImageImport} from '@/vendor/ImageImport.js';
  import {ImageResize} from '@/vendor/ImageResize.js';
  Quill.register('modules/imageImport', ImageImport);
  Quill.register('modules/imageResize', ImageResize);
  import {quillEditor} from 'vue-quill-editor';
  const toolbarOptions = {
    container: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],
      ['link', 'image']
    ]
  };
  export default {
    name: 'vue-quill',
    components:{
      quillEditor
    },
    data () {
      return {
        editorOption: {
          modules: {
            imageImport: true,
            imageResize: {
              displaySize: true
            },
            toolbar: toolbarOptions,
          }
        },
        content:''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>
    <el-upload list-type="picture-card" :limit="1" action="#" :on-preview="preview" :file-list="fileList" :class="{disabled: fileComputed }">
      <i class="el-icon-plus" />
    </el-upload>
    <el-dialog title="图片" :visible.sync="showDialog">
      <img :src="imgUrl" style="width:100%" alt="">
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [{
        url: 'http://file01.16sucai.com/d/file/2011/0801/20110801111724537.jpg'
      }], // 图片地址设置为数组
      showDialog: false, // 控制显示弹层
      imgUrl: ''
    }
  },
  computed: {
    // 判断是否已经上传完了一张
    fileComputed() {
      return this.fileList.length === 1
    }
  },
  methods: {
    preview(file) {
      this.imgUrl = file.url
      this.showDialog = true
    }
  }
}
</script>
<style>
.disabled .el-upload--picture-card {
  display: none
}
</style>

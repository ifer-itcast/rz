<template>
  <div>
    <el-upload list-type="picture-card" :limit="1" action="#" :on-preview="preview" :on-remove="handleRemove" :on-change="changeFile" :file-list="fileList" :class="{disabled: fileComputed }">
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
    },
    handleRemove(file) {
      // file是点击删除的文件
      this.fileList = this.fileList.filter(item => item.uid !== file.uid)
    },
    changeFile(file, fileList) {
      // 会执行多次
      this.fileList = fileList.map(item => item)
      // 上面之所以出不来，原因是上面的操作方式 this.fileList 最终还是为空数组，可如下写法
      // fileList.length && (this.fileList = fileList.map(item => ({ url: item.url })))
      // 上传成功 -> 数据才能进来 -> 腾讯云 OS
    }
  }
}
</script>
<style>
.disabled .el-upload--picture-card {
  display: none
}
</style>

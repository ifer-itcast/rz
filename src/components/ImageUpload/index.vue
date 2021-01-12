<template>
  <div>
    <el-upload list-type="picture-card" :limit="1" action="#" :on-preview="preview" :on-remove="handleRemove" :on-change="changeFile" :before-upload="beforeUpload" :file-list="fileList" :class="{disabled: fileComputed }">
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
      // 上传成功 -> 数据才能进来 -> 腾讯云 OS
    },
    beforeUpload(file) {
      // 文件类型、文件大小
      const types = ['image/jpeg', 'image/gif', 'image/bmp', 'image/png']
      if (!types.includes(file.type)) {
        this.$message.error('上传图片只能是 JPG、GIF、BMP、PNG 格式!')
        return false
      }
      // 检查大小
      const maxSize = 5 * 1024 * 1024
      if (maxSize < file.size) {
        this.$message.error('图片大小最大不能超过5M')
        return false
      }
      return true
    }
  }
}
</script>
<style>
.disabled .el-upload--picture-card {
  display: none
}
</style>

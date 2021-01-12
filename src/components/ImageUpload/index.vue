<template>
  <div>
    <el-upload
      list-type="picture-card"
      :limit="1"
      action="#"
      :on-preview="preview"
      :on-remove="handleRemove"
      :on-change="changeFile"
      :before-upload="beforeUpload"
      :http-request="upload"
      :file-list="fileList"
      :class="{ disabled: fileComputed }"
    >
      <i class="el-icon-plus" />
    </el-upload>
    <el-progress v-if="showPercent" style="width: 180px" :percentage="percent" />
    <el-dialog title="图片" :visible.sync="showDialog">
      <img :src="imgUrl" style="width:100%" alt="">
    </el-dialog>
  </div>
</template>
<script>
import COS from 'cos-js-sdk-v5'
const cos = new COS({
  SecretId: 'AKIDQmu0HrSQcZeU3cqA4iCcmgYidIhrQrjy',
  SecretKey: 'jDRPmTx8rrdBTWXINPltwjKvJRmqfEYl'
})
export default {
  data() {
    return {
      fileList: [{
        url: 'http://file01.16sucai.com/d/file/2011/0801/20110801111724537.jpg'
      }], // 图片地址设置为数组
      showDialog: false, // 控制显示弹层
      imgUrl: '',
      currentFileUid: '',
      percent: 0,
      showPercent: false
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
      const maxSize = 10 * 1024 * 1024
      if (maxSize < file.size) {
        this.$message.error('图片大小最大不能超过10M')
        return false
      }
      // 记住当前的 uid
      this.currentFileUid = file.uid
      this.showPercent = true
      return true
    },
    upload(params) {
      if (params.file) {
        cos.putObject({
          Bucket: 'ifer-1253924894', // 存储桶
          Region: 'ap-nanjing', // 地域
          Key: params.file.name, // 文件名
          Body: params.file, // 要上传的文件对象
          StorageClass: 'STANDARD', // 上传的模式类型 直接默认 标准模式即可
          onProgress: (params) => {
            this.percent = params.percent * 100
          }
        }, (err, data) => {
          if (!err && data.statusCode === 200) {
            this.fileList = this.fileList.map(item => {
              if (item.uid === this.currentFileUid) {
                return { url: 'http://' + data.Location, upload: true }
              }
              return item
            })
            setTimeout(() => {
              this.showPercent = false // 隐藏进度条
              this.percent = 0 // 进度归0
            }, 2000)
          }
        })
      }
    }
  }
}
</script>
<style>
.disabled .el-upload--picture-card {
  display: none;
}
</style>

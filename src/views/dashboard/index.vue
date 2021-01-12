<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <!-- <page-tools :show-before="true">
      <template v-slot:before>
        <span>x</span>
      </template>
      <el-button slot="after" type="primary">导入 Excel</el-button>
    </page-tools> -->
    <!-- <upload-excel /> -->
    <image-upload />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

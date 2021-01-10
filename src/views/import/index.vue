<template>
  <upload-excel :on-success="success" />
</template>

<script>
export default {
  name: 'Import',
  methods: {
    success({ header, results }) {

    }
  }
}
</script>

<style lang='less' scoped>

</style>

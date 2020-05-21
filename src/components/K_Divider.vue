<template>
  <div>
    <a-divider style="margin:0" :orientation="formData.options.contentPosition">{{formData.name}}</a-divider>
  </div>
</template>

<script>
export default {
  name: 'divider',
  props: {
    formData: {
      required: false
    }
  }
}
</script>

<style lang="less" scoped>
</style>

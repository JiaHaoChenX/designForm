<template>
  <div class="textBig">
    {{formData.options.defaultValue}}
  </div>
</template>

<script>
export default {
  name: 'text',
  props: {
    formData: {
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.textBig {
  text-align: left;
  font-size: 14px;
  color: #606266;
}
</style>

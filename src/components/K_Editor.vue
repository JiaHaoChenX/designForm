<template>
  <div class="coverFormItem">
    <div :id="formData.model"></div>
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
  name: 'Keditor',
  props: {
    formData: {
      required: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      let editor = new E(`#${this.formData.model}`)
      editor.create()
      editor = null
    })
  }
}
</script>

<style lang="less" scoped>
</style>

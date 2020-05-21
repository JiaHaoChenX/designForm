<template>
  <div class="coverFormItem">
    <a-input :placeholder="formData.options.placeholder" v-model="formData.options.defaultValue"/>
  </div>
</template>

<script>
export default {
  name: 'kinput',
  props: {
    formData: {
      required: false
    }
  }
}
</script>

<style lang="less" scoped>
</style>

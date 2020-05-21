<template>
  <div class="coverFormItem">
    <a-textarea :placeholder="formData.options.placeholder" v-model="formData.options.defaultValue" :autoSize="{ minRows: 4, maxRows: 4 }" />
  </div>
</template>

<script>
export default {
  name: 'ktextarea',
  props: {
    formData: {
      required: false
    }
  }
}
</script>

<style lang="less" scoped>
.textarea {
  width: 100%;
  height: 107px;
  text-align: left;
  font-size: 14px;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 1px solid #DCDFE6;
  border-radius: 5px;
}

</style>

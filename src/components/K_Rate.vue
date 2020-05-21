<template>
  <div class="rateBig coverFormItem">
    <a-rate :count="formData.options.max" v-model="formData.options.defaultValue"/>
  </div>
</template>

<script>
export default {
  name: 'rate',
  props: {
    formData: {
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.rateBig {
  text-align: left;
}
.rate {
  margin-right: 10px;
}

</style>

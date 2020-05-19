<template>
  <div class="switchBig">
    <a-switch disabled v-model="formData.options.defaultValue"/>
  </div>
</template>

<script>
export default {
  name: 'mySwitch',
  props: {
    formData: {
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.switchBig {
  text-align: left;
}
</style>

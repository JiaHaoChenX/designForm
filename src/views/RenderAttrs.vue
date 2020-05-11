<template>
  <div>
    <template v-for="(item, index) in optionsList">
      <div :key="index">
        <label for="">{{curRenderForm.lableObj[item]}}</label>
        <a-input placeholder="Basic usage" />
        <a-divider />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'RenderAttrs',
  props: {
    optionsObj: {
      required: true
    }
  },
  computed: {
    curRenderForm () {
      return this.$store.getters.getCurRenderForm
    },
    optionsList () {
      return Object.keys(this.$store.getters.getCurRenderForm.lableObj || {})
    }
  }
}
</script>

<style lang="less" scoped>

</style>

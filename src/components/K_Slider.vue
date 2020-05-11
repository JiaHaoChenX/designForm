<template>
  <div class="sliderBig">
    <a-slider id="test" :default-value="30" :disabled="disabled" />
  </div>
</template>

<script>
export default {
  name: 'slider'
}
</script>

<style lang="less" scoped>
.sliderBig {
  text-align: left;
}
</style>

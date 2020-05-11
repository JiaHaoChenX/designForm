<template>
  <div class="switchBig">
    <a-switch default-checked @change="onChange" />
  </div>
</template>

<script>
export default {
  name: 'switch'
}
</script>

<style lang="less" scoped>
.switchBig {
  text-align: left;
}
</style>

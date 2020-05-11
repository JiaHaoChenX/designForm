<template>
  <div class="radioBig">
    <div class="radio">
      <span class="radius"></span>
      <span class="lable">Option1</span>
    </div>
    <div class="radio">
      <span class="radius"></span>
      <span class="lable">Option1</span>
    </div>
    <div class="radio">
      <span class="radius"></span>
      <span class="lable">Option1</span>
    </div>
    <div class="radio">
      <span class="radius"></span>
      <span class="lable">Option1</span>
    </div>
    <div class="radio">
      <span class="radius"></span>
      <span class="lable">Option1</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkbox'
}
</script>

<style lang="less" scoped>
.radioBig {
  text-align: left;
}
.radius {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  vertical-align: middle;
}
.lable {
  font-size: 14px;
  padding-left: 10px;
}
.radio {
  display: inline-block;
  margin-right: 10px;
}
</style>

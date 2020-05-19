<template>
  <div class="cascaderBig">
    <div class="cascader">
      <span class="value"></span>
      <a-icon type="caret-down" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'cascader'
}
</script>

<style lang="less" scoped>
.cascader {
  width: 240px;
  height: 32px;
  line-height: 32px;
  text-align: right;
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #DCDFE6;
  color: #5f7082;
  border-radius: 5px;
}
.value {
  text-indent: 10px;
  display: inline-block;
}
</style>

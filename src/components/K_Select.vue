<template>
  <div class="selectBig">
    <div class="select">
      <span class="value">{{formData.options.defaultValue}}</span>
      <a-icon type="caret-down" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'mySelect',
  props: {
    formData: {
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.select {
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
  float: left;
  text-indent: 10px;
  display: inline-block;
}
</style>

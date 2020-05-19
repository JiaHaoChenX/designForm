<template>
  <div class="timeBig">
    <div class="time">
      <a-icon type="history"/>
      <span class="value">{{formData.options.defaultValue}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'time',
  props: {
    formData: {
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.time {
  width: 240px;
  height: 32px;
  line-height: 32px;
  text-align: left;
  font-size: 14px;
  text-indent: 5px;
  border: 1px solid #DCDFE6;
  color: #5f7082;
  border-radius: 5px;
}
.value {
  text-indent: 10px;
  display: inline-block;
}
</style>

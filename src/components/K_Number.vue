<template>
  <div class="numberBig">
    <div class="reduce"><a-icon type="minus" /></div>
    <div class="number">{{formData.options.defaultValue}}</div>
    <div class="plus"><a-icon type="plus" /></div>
  </div>
</template>

<script>
export default {
  name: 'number',
  props: {
    formData: {
      required: false
    }
  }
}
</script>

<style lang="less" scoped>
.numberBig {
  text-align: left;
}
.reduce, .number, .plus {
  display: inline-block;
  text-align: center;
  color: #606266;
}
.reduce, .plus {
  width: 32px;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  border-radius: 4px 0 0 4px;
  border-top: 1px solid #dcdfe6;
  border-bottom: 1px solid #dcdfe6;
  background: #f5f7fa;
  color: #606266;
}
.reduce {
  border-left: 1px solid #dcdfe6;
}
.plus {
  border-right: 1px solid #dcdfe6;
  border-radius: 0 4px 4px 0;
}
.number {
  width: 70px;
  height: 30px;
  line-height: 28px;
  border: 1px solid #dcdfe6;
}
</style>

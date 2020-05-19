<template>
  <div class="radioBig">
    <template v-for="(radio, index) in formData.options.options">
      <div class="radio" :key="index" :class="{inline: formData.options.inline}">
        <span class="radius" :class="{checkRadio: radio.value ===  formData.options.defaultValue}"></span>
        <span class="lable">{{radio.label}}</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'KRadio',
  props: {
    formData: {
      required: true
    }
  }
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
  border-radius: 7px;
  vertical-align: middle;
}
.lable {
  font-size: 14px;
  padding-left: 10px;
}
.radio {
  margin-right: 10px;
}
.checkRadio {
  background: #0b88f3 !important;
  border: none !important;
}
.inline {
  display: inline-block;
}
</style>

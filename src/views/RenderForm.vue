<template>
  <div class="elementList" @click.stop="renderFormClick">
    <div class="element" v-if="formData.type === 'grid'" :class="{elementBorder: isClick}">
      <div class="move drag-item" v-show="isClick" @mousedown="$emit('myMousedown')">
        <a-icon type="border-inner"/>
      </div>
      <div class="operation" v-show="isClick">
        <a-icon type="copy" class="icon"/>
        <a-divider type="vertical" />
        <a-icon type="delete" class="icon"/>
      </div>
      <div class="elementGrid">
        <grid :columns="formData"></grid>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'table'" :class="{elementBorder: isClick}">
      <div class="move drag-item" v-show="isClick" @mousedown="$emit('myMousedown')">
        <a-icon type="border-inner"/>
      </div>
      <div class="operation" v-show="isClick">
        <a-icon type="copy" class="icon"/>
        <a-divider type="vertical" />
        <a-icon type="delete" class="icon"/>
      </div>
      <div class="elementLable">{{formData.name}}</div>
      <div class="elementContent">
        <render-table :tableColumns="formData"></render-table>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'input'" :class="{elementBorder: isClick}">
      <div class="move drag-item" v-show="isClick" @mousedown="$emit('myMousedown')">
        <a-icon type="border-inner"/>
      </div>
      <div class="operation" v-show="isClick">
        <a-icon type="copy" class="icon"/>
        <a-divider type="vertical" />
        <a-icon type="delete" class="icon"/>
      </div>
      <div class="elementLable">{{formData.name}}</div>
      <div class="elementContent">
        <k-input></k-input>
      </div>
    </div>
  </div>
</template>

<script>
import KInput from '../components/K_Input'
export default {
  name: 'renderform',
  props: {
    formData: {
      required: true
    }
  },
  computed: {
    isClick () {
      return this.$store.getters.getCurRenderFormId === this.formData.id
    }
  },
  methods: {
    renderFormClick () {
      this.$store.commit('setCurRenderFormId', this.formData.id)
    }
  },
  components: {
    KInput
  }
}
</script>

<style lang="less" scoped>
.element {
  position: relative;
  border: 1px dashed hsla(0,0%,66.7%,.5);
  background: #fff;
  padding: 5px 10px 20px 10px;
  margin: 5px;
  overflow: hidden;
}
.elementBorder {
  outline: 2px solid #409eff;
  border: 1px solid #409eff;
}
.element:hover {
  background: #ECF5FF;
  border: 1px solid #409eff;
  cursor: pointer;
}
.move {
  position: absolute;
  left: -3px;
  top: -3px;
  line-height: 28px;
  color: white;
  width: 28px;
  font-size: 20px;
  height: 28px;
  background: #409eff;
}
.move:hover {
  cursor: move;
}
.operation {
  position: absolute;
  right: -3px;
  bottom: -3px;
  line-height: 28px;
  color: white;
  width: 60px;
  font-size: 16px;
  height: 28px;
  background: #409eff;
  z-index: 20;
  .icon:hover {
    cursor: pointer;
  }
}
.elementLable, .elementContent {
  display: inline-block;
}
.elementLable {
  width: 10%;
  float: left;
  font-size: 14px;
  color: #606266;
  text-align: right;
}
.elementContent {
  float: right;
  width: 90%;
  padding-left: 20px;
}
.elementGrid {
  width: 100%;
}
.line {
  height: 6px;
  width: 100%;
  background: #F56C6C;
  border-radius: 3px;
}
.elementList {
  // position: relative;
  // z-index: 100;
  // background: #ECF5FF;
}
</style>

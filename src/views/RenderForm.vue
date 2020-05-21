<template>
  <div class="elementList" @click.stop="renderFormClick">
    <div class="element" :class="{elementBorder: isClick}">
      <span class="model">{{formData.model}}</span>
      <div class="move drag-item" v-show="isClick" @mousedown="$emit('myMousedown')">
        <a-icon type="border-inner"/>
      </div>
      <div class="operation" v-show="isClick">
        <a-icon type="copy" class="icon"/>
        <a-divider type="vertical" />
        <a-icon type="delete" @click="deleteClick" class="icon"/>
      </div>
      <div class="elementLable" v-if="isShowName">{{formData.name}}</div>
      <div class="elementContent" :class="{elementGrid: !isShowName}">
        <component v-bind:is="components[formData.type]" :formData="formData"></component>
      </div>
    </div>
  </div>
</template>

<script>
import KInput from '../components/K_Input'
import KTextarea from '../components/K_Textarea'
import KNumber from '../components/K_Number'
import KRadio from '../components/K_Radio'
import KCheckbox from '../components/K_Checkbox'
import KTime from '../components/K_Time'
import KDate from '../components/K_Date'
import KRate from '../components/K_Rate'
import KSelect from '../components/K_Select'
import KSwitch from '../components/K_Switch'
import KSlider from '../components/K_Slider'
import KText from '../components/K_Text'
import KFileupload from '../components/K_Fileupload'
import KImgupload from '../components/K_Imgupload'
import KCascader from '../components/K_Cascader'
import KConfig from '../components/K_Config'
import KDivider from '../components/K_Divider'
import KEditor from '../components/K_Editor'
const components = {
  input: KInput,
  textarea: KTextarea,
  number: KNumber,
  radio: KRadio,
  checkbox: KCheckbox,
  time: KTime,
  date: KDate,
  rate: KRate,
  kSelect: KSelect,
  switch: KSwitch,
  slider: KSlider,
  text: KText,
  fileupload: KFileupload,
  imgupload: KImgupload,
  cascader: KCascader,
  config: KConfig,
  divider: KDivider,
  editor: KEditor,
  grid: 'grid',
  table: 'render-table'
}
const hiddenNameList = ['grid', 'divider']
export default {
  name: 'renderform',
  props: {
    formData: {
      required: true
    }
  },
  computed: {
    isClick () {
      return this.$store.getters.getCurRenderForm.model === this.formData.model
    },
    isShowName () {
      return !hiddenNameList.find(item => item === this.formData.type)
    }
  },
  data () {
    return {
      components,
      hiddenNameList
    }
  },
  methods: {
    renderFormClick () {
      this.$store.commit('setCurRenderForm', this.formData)
    },
    deleteClick () {
      this.$emit('deleteClick', this.formData.model)
    }
  }
}
</script>

<style lang="less" scoped>
.elementList {
  position: relative;
}
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
  position: relative;
}
// .elementContent::before {
//   content: '';
//   display: block;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   z-index: 100;
// }
.elementGrid {
  width: 100%;
  padding-left: 0 !important;
}
.line {
  height: 6px;
  width: 100%;
  background: #F56C6C;
  border-radius: 3px;
}
.model {
  position: absolute;
  top: 0px;
  right: 6px;
  font-size: 12px;
  color: #67c23a;
  z-index: 9;
}

.coverFormItem {
  position: relative;
}
.coverFormItem::before{
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10000000000;
}
</style>

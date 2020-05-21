<template>
  <div class="elementList" @click.stop="renderFormClick">
    <!-- <template v-for="(item, index) in Object.keys(components)"> -->
      <div class="element" :class="{elementBorder: isClick}">
        <div class="move drag-item" v-show="isClick" @mousedown="$emit('myMousedown')">
          <a-icon type="border-inner"/>
        </div>
        <div class="operation" v-show="isClick">
          <a-icon type="copy" class="icon"/>
          <a-divider type="vertical" />
          <a-icon type="delete" class="icon"/>
        </div>
        <div class="elementLable" v-if="isShowName">{{formData.name}}</div>
        <div class="elementContent" :class="{elementGrid: !isShowName}">
          <component v-bind:is="components[formData.type]" :formData="formData"></component>
        </div>
      </div>
    <!-- </template> -->
    <!-- <div class="element" v-if="formData.type === 'grid'" :class="{elementBorder: isClick}">
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
    </div> -->
    <!-- <div class="element" v-else-if="formData.type === 'input'" :class="{elementBorder: isClick}">
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
        <component v-bind:is="components.KInput"></component>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'textarea'" :class="{elementBorder: isClick}">
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
        <k-textarea></k-textarea>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'number'" :class="{elementBorder: isClick}">
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
        <k-number></k-number>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'radio'" :class="{elementBorder: isClick}">
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
        <k-radio :formData="formData"></k-radio>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'checkbox'" :class="{elementBorder: isClick}">
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
        <k-checkbox :formData="formData"></k-checkbox>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'time'" :class="{elementBorder: isClick}">
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
        <k-time :formData="formData"></k-time>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'date'" :class="{elementBorder: isClick}">
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
        <k-date :formData="formData"></k-date>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'rate'" :class="{elementBorder: isClick}">
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
        <k-rate :formData="formData"></k-rate>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'select'" :class="{elementBorder: isClick}">
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
        <k-select :formData="formData"></k-select>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'switch'" :class="{elementBorder: isClick}">
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
        <k-switch :formData="formData"></k-switch>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'slider'" :class="{elementBorder: isClick}">
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
        <k-slider></k-slider>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'text'" :class="{elementBorder: isClick}">
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
        <k-text  :formData="formData"></k-text>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'fileupload'" :class="{elementBorder: isClick}">
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
        <k-fileupload></k-fileupload>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'config'" :class="{elementBorder: isClick}">
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
        <k-config></k-config>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'imgupload'" :class="{elementBorder: isClick}">
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
        <k-imgupload></k-imgupload>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'cascader'" :class="{elementBorder: isClick}">
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
        <k-cascader></k-cascader>
      </div>
    </div>
    <div class="element" v-else-if="formData.type === 'divider'" :class="{elementBorder: isClick}">
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
        <k-divider></k-divider>
      </div>
    </div> -->
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
// import KGrid from '../components/K_Grid'
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
  grid: 'grid',
  table: 'table'
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
    }
  }
}
</script>

<style lang="less" scoped>
.elementList {
  position: relative;
}
.elementList::before {
  // content: '';
  // display: block;
  // position: absolute;
  // width: 100%;
  // height: 100%;
  // z-index: 100;
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
.elementContent::before {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
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
</style>

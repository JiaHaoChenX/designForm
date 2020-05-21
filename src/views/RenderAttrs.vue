<template>
  <div>
    <template v-for="(item, index) in optionsList">
      <div :key="index">
        <label for="" v-if="formLableList[curRenderForm.type][item].type !== 'hidden'">{{formLableList[curRenderForm.type][item].label}}</label>
        <a-input v-if="formLableList[curRenderForm.type][item].type === 'input'" v-model="curRenderForm.options[item]"/>
        <a-input v-if="formLableList[curRenderForm.type][item].type === 'model'" v-model="curRenderForm.model"/>
        <a-input v-if="formLableList[curRenderForm.type][item].type === 'name'" v-model="curRenderForm.name"/>
        <a-switch v-else-if="formLableList[curRenderForm.type][item].type === 'switch'" v-model="curRenderForm.options[item]" style="float: right;"/>
        <a-input-number v-else-if="formLableList[curRenderForm.type][item].type === 'inputNumber'" v-model="curRenderForm.options[item]" style="display: block;width: 100%;"/>
        <a-rate v-else-if="formLableList[curRenderForm.type][item].type === 'rate'"
          :count="curRenderForm.options.max" v-model="curRenderForm.options[item]" style="display: block;width: 100%;"/>
        <a-radio-group v-else-if="formLableList[curRenderForm.type][item].type === 'radioGroup'" v-model="curRenderForm.options[item]" style="display: block;">
          <template v-for="(radio, radioIndex) in formLableList[curRenderForm.type][item].options">
            <a-radio-button :key="radioIndex" :value="radio.value">
              {{radio.label}}
            </a-radio-button>
          </template>
        </a-radio-group>
        <div v-else-if="formLableList[curRenderForm.type][item].type === 'options'">
          <a-radio-group style="display: block;" v-model="curRenderForm.options.remote">
            <a-radio-button :value="false">静态数据</a-radio-button>
            <a-radio-button :value="true">动态数据</a-radio-button>
          </a-radio-group>
          <div v-if="!curRenderForm.options.remote">
            <a-radio-group v-model="curRenderForm.options['defaultValue']" v-if="formLableList[curRenderForm.type][item].selectType === 'radio'">
              <template v-for="(optionsRadio, optionsRadioIndex) in curRenderForm.options[item]">
                <a-radio :key="optionsRadioIndex" :value="optionsRadio.value" style="margin: 5px 0;">
                  <a-input v-model="optionsRadio.label" style="width: 85%;"/>
                </a-radio>
                <a-icon class="icon" :key="optionsRadioIndex + '_'" @click.stop="editOptionsRadio(optionsRadio, optionsRadioIndex)" type="edit" title="编辑"/>
                <a-divider :key="optionsRadioIndex + '*'" type="vertical"/>
                <a-icon class="icon" :key="optionsRadioIndex + '+'" @click.stop="delOptionsRadio(optionsRadioIndex)" type="delete" title="删除"/>
              </template>
            </a-radio-group>
            <a-checkbox-group v-model="curRenderForm.options['defaultValue']" v-else-if="formLableList[curRenderForm.type][item].selectType === 'checkbox'">
              <template v-for="(optionsRadio, optionsRadioIndex) in curRenderForm.options[item]">
                <a-checkbox :key="optionsRadioIndex" :value="optionsRadio.value" style="margin: 5px 0;">
                  <a-input v-model="optionsRadio.label" style="width: 85%;"/>
                </a-checkbox>
                <a-icon class="icon" :key="optionsRadioIndex + '_'" @click.stop="editOptionsRadio(optionsRadio, optionsRadioIndex)" type="edit" title="编辑"/>
                <a-divider :key="optionsRadioIndex + '*'" type="vertical"/>
                <a-icon class="icon" :key="optionsRadioIndex + '+'" @click.stop="delOptionsRadio(optionsRadioIndex)" type="delete" title="删除"/>
              </template>
            </a-checkbox-group>
          </div>
          <div v-else>
            <a-radio-group style="display: block;margin: 10px 0;" v-model="curRenderForm.options.remoteType">
              <a-radio value="option">赋值变量</a-radio>
              <a-radio value="func">方法函数</a-radio>
            </a-radio-group>
            <a-input v-if="curRenderForm.options.remoteType === 'option'" v-model="curRenderForm.options.remoteOption"/>
            <a-input v-else v-model="curRenderForm.options.remoteFunc"/>
          </div>
          <a href="#" style="display: block;" @click="addOptionsRadio">添加选项</a>
        </div>
        <a-divider v-if="formLableList[curRenderForm.type][item].type !== 'hidden'" style="margin: 10px 0;"/>
      </div>
    </template>
    <div v-if="curRenderForm.type === 'grid'">
      <label >列配置项</label>
      <template v-for="(columns, index) in curRenderForm.columns">
        <div :key="index">
          <a-input-number style="width: 80%;margin: 5px 0;" v-model="columns.span"/>
          <a-icon type="delete" style="margin-left:10px"></a-icon>
        </div>
      </template>
      <a href="#" style="display: block;" @click="addcolumnsGrid">添加列</a>
    </div>
    <a-modal v-model="modelOptionsRadio" :title="modelOptionsRadioTitle"
      @ok="modelHandleOkOptionsRadio"
      :maskStyle="{ backgroundColor: 'rgba(0,0,0,0.2)' }"
      :bodyStyle="{ padding: '10px' }">
        <a-form :form="form" :label-col="{ span: 7 }" :wrapper-col="{ span: 12 }">
          <a-form-item label="label" >
            <a-input
              v-decorator="['label', { rules: [{ required: true, message: '请输入label!' }] }]"
            />
          </a-form-item>
          <a-form-item label="value" >
            <a-input
              v-decorator="['value', { rules: [{ required: true, message: '请输入value!' }] }]"
            />
          </a-form-item>
        </a-form>
    </a-modal>
  </div>
</template>

<script>
import { formLableList } from './formList'
export default {
  name: 'RenderAttrs',
  props: {
    optionsObj: {
      required: true
    }
  },
  computed: {
    curRenderForm () {
      return this.$store.getters.getCurRenderForm
    },
    optionsList () {
      return Object.keys(formLableList[this.curRenderForm.type] || {})
    }
  },
  mounted () {
    console.log(formLableList[this.curRenderForm.type])
  },
  data () {
    return {
      formLableList,
      modelOptionsRadioTitle: '添加属性',
      form: this.$form.createForm(this),
      updateIndex: 0,
      modelOptionsRadio: false
    }
  },
  methods: {
    addcolumnsGrid () {
      this.curRenderForm.columns.push({
        span: 0,
        list: []
      })
    },
    modelHandleOkOptionsRadio () {
      this.form.validateFields((error, values) => {
        if (!error) {
          const optionData = JSON.parse(JSON.stringify(values))
          if (this.modelOptionsRadioTitle === '添加属性') {
            this.curRenderForm.options.options.push(optionData)
          } else {
            this.curRenderForm.options.options.splice(this.updateIndex, 1, optionData)
          }
          this.form.resetFields()
          this.modelOptionsRadio = false
        }
      })
    },
    editOptionsRadio (value, index) {
      this.modelOptionsRadioTitle = '修改属性'
      this.updateIndex = index
      this.modelOptionsRadio = true
      this.$nextTick(() => {
        this.form.setFieldsValue(JSON.parse(JSON.stringify(value)))
      })
    },
    delOptionsRadio (index) {
      this.curRenderForm.options.options.splice(index, 1)
    },
    addOptionsRadio () {
      this.modelOptionsRadioTitle = '添加属性'
      this.modelOptionsRadio = true
    }
  }
}
</script>

<style lang="less" scoped>
.icon:hover{
  color: #409EFF !important;
}
</style>

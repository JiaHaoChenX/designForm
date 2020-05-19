<template>
  <div>
    <template v-for="(item, index) in optionsList">
      <div :key="index">
        <label for="" v-if="curRenderForm.lableObj[item].type !== 'hidden'">{{curRenderForm.lableObj[item].label}}</label>
        <a-input v-if="curRenderForm.lableObj[item].type === 'input'" v-model="curRenderForm.options[item]"/>
        <!-- <a-time-picker v-if="curRenderForm.lableObj[item].type === 'timePicker'" format="HH:mm" v-model="curRenderForm.options[item]" >
        </a-time-picker> -->
        <a-switch v-else-if="curRenderForm.lableObj[item].type === 'switch'" v-model="curRenderForm.options[item]" style="float: right;"/>
        <a-input-number v-else-if="curRenderForm.lableObj[item].type === 'inputNumber'" v-model="curRenderForm.options[item]" style="display: block;width: 100%;"/>
        <a-rate v-else-if="curRenderForm.lableObj[item].type === 'rate'"
          :count="curRenderForm.options.max" v-model="curRenderForm.options[item]" style="display: block;width: 100%;"/>
        <a-radio-group v-else-if="curRenderForm.lableObj[item].type === 'radioGroup'" v-model="curRenderForm.options[item]" style="display: block;">
          <template v-for="(radio, radioIndex) in curRenderForm.lableObj[item].options">
            <a-radio-button :key="radioIndex" :value="radio.value">
              {{radio.label}}
            </a-radio-button>
          </template>
        </a-radio-group>
        <div v-else-if="curRenderForm.lableObj[item].type === 'options'">
          <a-radio-group v-model="curRenderForm.options['defaultValue']" v-if="curRenderForm.lableObj[item].selectType === 'radio'">
            <template v-for="(optionsRadio, optionsRadioIndex) in curRenderForm.options[item]">
              <a-radio :key="optionsRadioIndex" :value="optionsRadio.value" style="margin: 5px 0;">
                <a-input v-model="optionsRadio.label" style="width: 85%;"/>
              </a-radio>
              <a-icon class="icon" :key="optionsRadioIndex + '_'" @click.stop="editOptionsRadio(optionsRadio, optionsRadioIndex)" type="edit" title="编辑"/>
              <a-divider :key="optionsRadioIndex + '*'" type="vertical"/>
              <a-icon class="icon" :key="optionsRadioIndex + '+'" @click.stop="delOptionsRadio(optionsRadioIndex)" type="delete" title="删除"/>
            </template>
          </a-radio-group>
          <a-checkbox-group v-model="curRenderForm.options['defaultValue']" v-else-if="curRenderForm.lableObj[item].selectType === 'checkbox'">
            <template v-for="(optionsRadio, optionsRadioIndex) in curRenderForm.options[item]">
              <a-checkbox :key="optionsRadioIndex" :value="optionsRadio.value" style="margin: 5px 0;">
                <a-input v-model="optionsRadio.label" style="width: 85%;"/>
              </a-checkbox>
              <a-icon class="icon" :key="optionsRadioIndex + '_'" @click.stop="editOptionsRadio(optionsRadio, optionsRadioIndex)" type="edit" title="编辑"/>
              <a-divider :key="optionsRadioIndex + '*'" type="vertical"/>
              <a-icon class="icon" :key="optionsRadioIndex + '+'" @click.stop="delOptionsRadio(optionsRadioIndex)" type="delete" title="删除"/>
            </template>
          </a-checkbox-group>
          <a href="#" style="display: block;" @click="addOptionsRadio">添加选项</a>
        </div>
        <a-divider v-if="curRenderForm.lableObj[item].type !== 'hidden'" style="margin: 10px 0;"/>
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
      return Object.keys(this.$store.getters.getCurRenderForm.lableObj || {})
    }
  },
  data () {
    return {
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

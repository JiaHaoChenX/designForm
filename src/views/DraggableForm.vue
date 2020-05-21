<template>
  <div class="designform">
    <div style="overflow: hidden;position: relative;">
      <div class="left">
        <div class="header">表单字段</div>
        <ul class="formElem">
          <vuedraggable :clone="cloneData" :list="formList" :options="dragOptions1">
            <transition-group type="transition" :name="'flip-list'" tag="div">
              <template v-for="(item, index) in formList">
                <li :key="index"><a-icon type="file-text" /> {{item.name}}</li>
              </template>
            </transition-group>
          </vuedraggable>
        </ul>
      </div>
      <div class="middle">
        <div class="operation">
          <a-button type="link" @click="addFormData">
            保存
          </a-button>
        </div>
        <vuedraggable :list="resultJson.list" :options="dragOptions2" class="vuedraggable">
          <transition-group class="form" type="transition" :name="'flip-list'" tag="div">
            <template v-for="(item, index) in resultJson.list">
              <render-form :key="index" :formData="item"></render-form>
            </template>
          </transition-group>
        </vuedraggable>
      </div>
      <div class="right">
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" tab="字段属性">
            <div style="margin: 10px;text-align: left;">
              <render-attrs :optionsObj="curRenderForm"></render-attrs>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="表当属性" force-render>
            <div style="margin: 10px;text-align: left;">
              <label>unitUrl</label>
              <a-input v-model="resultJson.unitUrl"/>
              <label>optionUrl</label>
              <a-input v-model="resultJson.optionUrl"/>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/blackboard.css'
import vuedraggable from 'vuedraggable'
import { formList } from './formList'
import RenderAttrs from './RenderAttrs'
import mockData from './mock'
export default {
  name: 'designform',
  computed: {
    curRenderForm () {
      return this.$store.getters.getCurRenderForm
    }
  },
  data () {
    return {
      formList,
      // resultJson: {
      //   list: [],
      //   unitUrl: '',
      //   optionUrl: ''
      // },
      resultJson: mockData,
      // 拖拽表单1
      dragOptions1: {
        animation: 0,
        // 分组
        group: {
          name: 'dragOptions1',
          pull: 'clone',
          revertClone: false
        },
        // 禁止拖动排序
        sort: false
      },
      // 拖拽表单2
      dragOptions2: {
        animation: 200,
        ghostClass: 'ghost',
        handle: '.drag-item',
        group: {
          name: 'dragOptions2',
          // 只允许放置shared的控件,禁止pull
          put: ['dragOptions1', 'grid', 'table']
        }
      }
    }
  },
  mounted () {

  },
  methods: {
    addFormData () {
      console.log(JSON.stringify(this.resultJson))
    },
    cloneData (original) {
      const copyOriginal = JSON.parse(JSON.stringify(original))
      copyOriginal.model = original.type + '_' + new Date().getTime()
      this.$store.commit('setCurRenderForm', copyOriginal)
      return copyOriginal
    }
  },
  watch: {
    curRenderForm (val) {
    }
  },
  components: {
    vuedraggable,
    RenderAttrs
  }
}
</script>
<style lang="less" scoped>
.designform {
  margin: 0;
  padding: 0;
  font-size: 0;
}
.left, .middle, .right {
  height: 100vh;
  overflow-x: hidden;
  display: inline-block;
  font-size: 16px;
}
.left, .right {
  width: 300px;
  position: absolute;
  background: white;
  z-index: 10;
}
.left{
  left: 0;
  border-right: 1px solid #E0E0E0;
  > .header {
    height: 40px;
    line-height: 40px;
    padding-top: 10px;
    text-align: left;
    text-indent: 20px;
  }
}
.right{
  right: 0;
  border-left: 1px solid #E0E0E0;
}

.middle {
  width: 100%;
  height: 100vh;
  padding: 0 300px 0 300px;
  box-sizing: border-box;
  word-wrap:break-word;
  > .operation {
    height: 45px;
    line-height: 45px;
    border-bottom: 2px solid #E4E7ED;
    text-align: right;
  }
  .vuedraggable {
    height: 90%;
    border: 1px dashed #A29C9C;
    margin: 10px;
    overflow-y: auto;
    .form {
      height: 90%;
    }
  }
}
.formElem {
  padding: 10px 5px;
  li {
    display: inline-block;
    font-size: 13px;
    width: 130px;
    overflow: hidden;
    // border: 1px dashed #A29C9C;
    background: #F4F6FC;
    // box-sizing: border-box;
    border: 1px solid #f4f6fc;
    margin: 5px;
    line-height: 30px;
    height: 30px;
    transition: color .3s;
    text-align: left;
    text-indent: 10px;
  }
  li:hover {
    cursor: move;
    color: #409EFF;
    border: 1px dashed #409EFF;
  }
}
// .content {
//   margin: auto;
//   width: 80%;
//   height: 70vh;
//   background: RGBA(129,180,234, 0.5);
// }
// .formItem {
//   margin-bottom: 10px;
// }
// .item {
//   width: 90px;
//   height: 40px;
//   line-height: 40px;
//   color: white;
//   display: inline-block;
//   background: #8dc3d8;
//   margin: 0 10px;
// }
// .item:hover {
//   cursor: pointer;
// }
</style>
<style>
.ghost {
  height: 0px !important;
  width: 100% !important;
  background: #F56C6C !important;
  border-radius: 3px !important;
  overflow: hidden !important;
  border: 3px solid #F56C6C;
  position: relative;
}
</style>

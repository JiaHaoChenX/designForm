<template>
  <div>
    <vuedraggable :list="formData.tableColumns" :options="dragOptionsTable">
      <transition-group class="table" type="transition" :name="'grid-list'" tag="div">
        <template v-for="(item, index) in formData.tableColumns">
          <render-form :name="item.id" :key="index" @renderFormClick="renderFormClick(item.id)" class="renderForm"
            :isClick="curRenderFormId === item.id" :formData="item"></render-form>
        </template>
      </transition-group>
    </vuedraggable>
  </div>
</template>

<script>
// import RenderForm from './RenderForm'
import vuedraggable from 'vuedraggable'
export default {
  name: 'myTable',
  props: {
    formData: {
      required: true
    }
  },
  data () {
    return {
      curRenderFormId: '',
      // 拖拽表单2
      dragOptionsTable: {
        animation: 200,
        ghostClass: 'ghost',
        handle: '.drag-item',
        group: {
          name: 'table',
          // 只允许放置shared的控件,禁止pull
          put: ['dragOptions1', 'dragOptions2', 'grid', 'table']
        }
      }
    }
  },
  components: {
    // 'render-form': RenderForm,
    vuedraggable
  }
}
</script>

<style lang="less" scoped>
.table {
  min-height: 150px;
  border: 1px dashed hsla(0,0%,66.7%,.5);
  text-align: left;
  overflow: auto;
  white-space: nowrap;
}
.renderForm {
  width: 300px !important;
  display: inline-block;
}
</style>

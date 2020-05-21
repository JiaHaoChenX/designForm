<template>
  <div>
    <a-row>
      <template v-for="(elem, indexElem) in formData.columns">
        <a-col :key="indexElem" :span="elem.span" class="">
          <vuedraggable :list="elem.list" :options="dragOptionsGird" class="">
            <transition-group class="a-col" type="transition" :name="'grid-list'" tag="div">
              <template v-for="(item, index) in elem.list">
                <render-form :key="index" @renderFormClick="renderFormClick(item.id)" @deleteClick="deleteClick"
                  :isClick="curRenderFormId === item.id" :formData="item"></render-form>
              </template>
            </transition-group>
          </vuedraggable>
        </a-col>
      </template>
    </a-row>
  </div>
</template>

<script>
// import RenderForm from './RenderForm'
import vuedraggable from 'vuedraggable'
export default {
  name: 'grid',
  props: {
    formData: {
      required: true
    }
  },
  data () {
    return {
      curRenderFormId: '',
      // 拖拽表单2
      dragOptionsGird: {
        animation: 200,
        ghostClass: 'ghost',
        handle: '.drag-item',
        group: {
          name: 'grid',
          // 只允许放置shared的控件,禁止pull
          put: ['dragOptions1', 'dragOptions2', 'grid', 'table']
        }
      }
    }
  },
  components: {
    // 'render-form': RenderForm,
    vuedraggable
  },
  methods: {
    deleteClick (model) {
      this.formData.columns.map(item => {
        item.list = item.list.filter(item => item.model !== model)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.a-col {
  min-height: 50px;
  border: 1px dashed hsla(0,0%,66.7%,.5);
}
</style>

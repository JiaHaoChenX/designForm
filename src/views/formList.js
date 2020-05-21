export const formList = [
  {
    name: '单行文本',
    type: 'input',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: '',
      onchange: '',
      onclick: '',
      hidden: false,
      disabled: false
    }
  },
  {
    name: '多行文本',
    type: 'textarea',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: '',
      hidden: false,
      disabled: false
    }
  },
  {
    name: '分割线',
    type: 'divider',
    options: {
      contentPosition: 'left',
      hidden: false
    }
  },
  {
    name: '计数器',
    type: 'number',
    options: {
      min: 0,
      max: 0,
      step: 0,
      placeholder: '',
      customClass: '',
      defaultValue: 0,
      hidden: false,
      disabled: false
    }
  },
  {
    name: '单选框组',
    type: 'radio',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: '',
      remote: false,
      remoteType: 'option',
      remoteOption: '',
      remoteFunc: '',
      hidden: false,
      disabled: false,
      inline: true,
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        }
      ]
    }
  },
  {
    name: '多选选框组',
    type: 'checkbox',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: [],
      remote: false,
      remoteType: 'option',
      remoteOption: '',
      remoteFunc: '',
      hidden: false,
      disabled: false,
      inline: true,
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        }
      ]
    }
  },
  {
    name: '时间选择器',
    type: 'time',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: '',
      hidden: false,
      disabled: false
    }
  },
  {
    name: '日期选择器',
    type: 'date',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: '',
      hidden: false,
      disabled: false
    }
  },
  {
    name: '评分',
    type: 'rate',
    options: {
      max: 5,
      placeholder: '',
      customClass: '',
      defaultValue: 5,
      hidden: false,
      disabled: false
    }
  },
  {
    name: '下拉选择框',
    type: 'select',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: '',
      remote: false,
      remoteType: 'option',
      remoteOption: '',
      remoteFunc: '',
      hidden: false,
      disabled: false,
      multiple: false,
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        }
      ]
    }
  },
  {
    name: '开关',
    type: 'switch',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: false,
      hidden: false,
      disabled: false
    }
  },
  {
    name: '文字',
    type: 'text',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: 'This is a text',
      hidden: false,
      disabled: false
    }
  },
  {
    name: '文件',
    type: 'fileupload',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: '',
      limit: 5,
      hidden: false,
      disabled: false
    }
  },
  {
    name: '配置项',
    type: 'config',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: '',
      hidden: false,
      disabled: false
    }
  },
  {
    name: '图片',
    type: 'imgupload',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: '',
      hidden: false,
      disabled: false
    }
  },
  {
    name: '级联选择器',
    type: 'cascader',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: '',
      hidden: false,
      disabled: false
    }
  },
  {
    name: '栅格布局',
    type: 'grid',
    columns: [
      {
        span: 12,
        list: []
      },
      {
        span: 12,
        list: []
      }
    ],
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: '',
      hidden: false,
      disabled: false
    }
  },
  {
    name: '子表单',
    type: 'table',
    tableColumns: [],
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: [],
      hidden: false,
      disabled: false
    }
  },
  {
    name: '编辑器',
    type: 'editor',
    options: {
      hidden: false,
      disabled: false,
      required: false
    }
  }
]
export const formLableList = {
  input: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    placeholder: {
      label: '占位内容',
      type: 'input'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    defaultValue: {
      label: '默认值',
      type: 'input'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  textarea: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    placeholder: {
      label: '占位内容',
      type: 'input'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    defaultValue: {
      label: '默认值',
      type: 'input'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  divider: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    contentPosition: {
      label: '文案位置',
      type: 'radioGroup',
      options: [
        {
          label: '左侧',
          value: 'left'
        },
        {
          label: '居中',
          value: 'center'
        },
        {
          label: '右侧',
          value: 'right'
        }
      ]
    }
  },
  editor: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    }
  },
  number: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    min: {
      label: '最小值',
      type: 'inputNumber'
    },
    max: {
      label: '最大值',
      type: 'inputNumber'
    },
    step: {
      label: '步长',
      type: 'inputNumber'
    },
    defaultValue: {
      label: '默认值',
      type: 'inputNumber'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  radio: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    inline: {
      label: '布局方式',
      type: 'radioGroup',
      options: [
        {
          label: '块级',
          value: false
        },
        {
          label: '行内',
          value: true
        }
      ]
    },
    options: {
      label: '选项',
      type: 'options',
      selectType: 'radio'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    defaultValue: {
      label: '默认值',
      type: 'hidden'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  checkbox: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    inline: {
      label: '布局方式',
      type: 'radioGroup',
      options: [
        {
          label: '块级',
          value: false
        },
        {
          label: '行内',
          value: true
        }
      ]
    },
    options: {
      label: '选项',
      type: 'options',
      selectType: 'checkbox'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    defaultValue: {
      label: '默认值',
      type: 'hidden'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  time: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    placeholder: {
      label: '占位内容',
      type: 'input'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    defaultValue: {
      label: '默认值',
      type: 'input'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  date: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    placeholder: {
      label: '占位内容',
      type: 'input'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    defaultValue: {
      label: '默认值',
      type: 'input'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  rate: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    placeholder: {
      label: '占位内容',
      type: 'input'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    max: {
      label: '最大值',
      type: 'inputNumber'
    },
    defaultValue: {
      label: '默认值',
      type: 'rate'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  select: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    multiple: {
      label: '是否多选',
      type: 'switch'
    },
    options: {
      label: '选项',
      type: 'options',
      selectType: 'radio'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    defaultValue: {
      label: '默认值',
      type: 'hidden'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  switch: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    placeholder: {
      label: '占位内容',
      type: 'input'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    defaultValue: {
      label: '默认值',
      type: 'switch'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  text: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    placeholder: {
      label: '占位内容',
      type: 'input'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    defaultValue: {
      label: '默认值',
      type: 'input'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  fileupload: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    placeholder: {
      label: '占位内容',
      type: 'input'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    limit: {
      label: '最大上传数',
      type: 'inputNumber'
    },
    defaultValue: {
      label: '默认值',
      type: 'input'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  config: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    placeholder: {
      label: '占位内容',
      type: 'input'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    defaultValue: {
      label: '默认值',
      type: 'input'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  imgupload: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    placeholder: {
      label: '占位内容',
      type: 'input'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    limit: {
      label: '最大上传数',
      type: 'inputNumber'
    },
    defaultValue: {
      label: '默认值',
      type: 'input'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  cascader: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    placeholder: {
      label: '占位内容',
      type: 'input'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    limit: {
      label: '最大上传数',
      type: 'inputNumber'
    },
    defaultValue: {
      label: '默认值',
      type: 'input'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  grid: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    placeholder: {
      label: '占位内容',
      type: 'input'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    limit: {
      label: '最大上传数',
      type: 'inputNumber'
    },
    defaultValue: {
      label: '默认值',
      type: 'input'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  },
  table: {
    model: {
      label: '唯一标识',
      type: 'model'
    },
    name: {
      label: '标签lable',
      type: 'name'
    },
    onchange: {
      label: 'change事件',
      type: 'input'
    },
    onclick: {
      label: 'click事件',
      type: 'input'
    },
    placeholder: {
      label: '占位内容',
      type: 'input'
    },
    customClass: {
      label: '自定义Class',
      type: 'input'
    },
    defaultValue: {
      label: '默认值',
      type: 'hidden'
    },
    hidden: {
      label: '隐藏',
      type: 'switch'
    },
    disabled: {
      label: '禁用',
      type: 'switch'
    },
    required: {
      label: '必填',
      type: 'switch'
    }
  }
}

const formList = [
  {
    name: '单行文本',
    type: 'input',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: '',
      hidden: false,
      disabled: false
    },
    lableObj: {
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
    },
    lableObj: {
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
      defaultValue: '',
      hidden: false,
      disabled: false
    },
    lableObj: {
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
    }
  },
  {
    name: '单选框组',
    type: 'radio',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: '',
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
    },
    lableObj: {
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
    }
  },
  {
    name: '多选选框组',
    type: 'checkbox',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: [],
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
    },
    lableObj: {
      inline: {
        label: '布局方式',
        type: 'checkoutGroup',
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
    },
    lableObj: {
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
    },
    lableObj: {
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
    },
    lableObj: {
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
    }
  },
  {
    name: '下拉选择框',
    type: 'select',
    options: {
      placeholder: '',
      customClass: '',
      defaultValue: '',
      hidden: false,
      disabled: false,
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
    },
    lableObj: {
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
    },
    lableObj: {
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
    },
    lableObj: {
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
    },
    lableObj: {
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
    },
    lableObj: {
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
    },
    lableObj: {
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
    },
    lableObj: {
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
    },
    lableObj: {
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
]
export default formList

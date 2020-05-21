const mockData = {
  unitUrl: 'change/unit.js',
  optionUrl: 'change/option.js',
  list: [
    {
      type: 'grid',
      icon: 'icon-RectangleCopy',
      columns: [
        {
          span: 24,
          xs: 12,
          sm: 12,
          md: 12,
          lg: 12,
          xl: 12,
          list: [
            {
              type: 'divider',
              icon: 'icon-fengexian',
              options: {
                hidden: false,
                contentPosition: 'center',
                remoteFunc: 'func_1585626892673',
                remoteOption: 'option_1585626892673'
              },
              name: '变更申请单',
              key: '1587623670495',
              model: 'divider_1585626892673',
              rules: [],
              novalid: {}
            },
            {
              type: 'grid',
              icon: 'icon-RectangleCopy',
              columns: [
                {
                  span: 12,
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  list: []
                },
                {
                  span: 12,
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  list: [
                    {
                      type: 'input',
                      icon: 'icon-input',
                      options: {
                        width: '100%',
                        defaultValue: '[变更工单编号]',
                        required: false,
                        dataType: 'string',
                        pattern: '',
                        placeholder: '',
                        customClass: '',
                        disabled: true,
                        labelWidth: 100,
                        isLabelWidth: false,
                        hidden: false,
                        dataBind: true,
                        showPassword: false,
                        remoteFunc: 'func_1585626917103',
                        remoteOption: 'option_1585626917103'
                      },
                      name: '工单编号',
                      novalid: {},
                      key: '1585626917103',
                      model: 'worknumber',
                      rules: [
                        {
                          type: 'string',
                          message: '格式不正确'
                        }
                      ]
                    }
                  ]
                }
              ],
              options: {
                gutter: 0,
                justify: 'start',
                align: 'top',
                customClass: '',
                hidden: false,
                flex: true,
                responsive: false,
                remoteFunc: 'func_1585626912386',
                remoteOption: 'option_1585626912386'
              },
              name: '栅格布局',
              key: '1587623660311',
              model: 'grid_1585626912386',
              rules: [],
              novalid: {}
            },
            {
              type: 'divider',
              icon: 'icon-fengexian',
              options: {
                hidden: false,
                contentPosition: 'center',
                remoteFunc: 'func_1585627053379',
                remoteOption: 'option_1585627053379'
              },
              name: '基本信息',
              novalid: {},
              key: '1585627053379',
              model: 'divider_1585627053379',
              rules: []
            },
            {
              type: 'grid',
              icon: 'icon-RectangleCopy',
              columns: [
                {
                  span: 12,
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  list: [
                    {
                      type: 'select',
                      icon: 'icon-select',
                      options: {
                        defaultValue: '',
                        multiple: false,
                        disabled: false,
                        clearable: false,
                        placeholder: '',
                        required: false,
                        showLabel: false,
                        width: '',
                        options: [],
                        remote: true,
                        remoteType: 'func',
                        remoteOption: 'option_applyuser',
                        filterable: true,
                        remoteOptions: [],
                        props: {
                          value: 'value',
                          label: 'label'
                        },
                        remoteFunc: 'func_applyuser',
                        customClass: '',
                        labelWidth: 100,
                        isLabelWidth: false,
                        hidden: false,
                        dataBind: true,
                        onChange: 'applyuserChange'
                      },
                      name: '申请人',
                      novalid: {},
                      key: '1585627099670',
                      model: 'applyuser',
                      rules: []
                    }
                  ]
                },
                {
                  span: 12,
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  list: [
                    {
                      type: 'select',
                      icon: 'icon-select',
                      options: {
                        defaultValue: [],
                        multiple: true,
                        disabled: false,
                        clearable: false,
                        placeholder: '',
                        required: false,
                        showLabel: false,
                        width: '',
                        options: [],
                        remote: true,
                        remoteType: 'func',
                        remoteOption: 'option_applydepartment',
                        filterable: true,
                        remoteOptions: [],
                        props: {
                          value: 'value',
                          label: 'label'
                        },
                        remoteFunc: 'func_applydepartment',
                        customClass: '',
                        labelWidth: 100,
                        isLabelWidth: false,
                        hidden: false,
                        dataBind: true
                      },
                      name: '申请部门',
                      novalid: {},
                      key: '1585627112286',
                      model: 'applydepartment',
                      rules: []
                    }
                  ]
                }
              ],
              options: {
                gutter: 0,
                justify: 'start',
                align: 'top',
                customClass: '',
                hidden: false,
                flex: true,
                responsive: false,
                remoteFunc: 'func_1585627088036',
                remoteOption: 'option_1585627088036'
              },
              name: '栅格布局',
              novalid: {},
              key: '1585627088036',
              model: 'grid_1585627088036',
              rules: []
            },
            {
              type: 'grid',
              icon: 'icon-RectangleCopy',
              columns: [
                {
                  span: 12,
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  list: [
                    {
                      type: 'date',
                      icon: 'icon-date',
                      options: {
                        defaultValue: '',
                        readonly: false,
                        disabled: false,
                        editable: true,
                        clearable: true,
                        placeholder: '',
                        startPlaceholder: '',
                        endPlaceholder: '',
                        type: 'datetime',
                        format: 'yyyy-MM-dd HH:mm:ss',
                        timestamp: false,
                        required: false,
                        width: '',
                        customClass: '',
                        labelWidth: 100,
                        isLabelWidth: false,
                        hidden: false,
                        dataBind: true,
                        remoteFunc: 'func_1585627223587',
                        remoteOption: 'option_1585627223587'
                      },
                      name: '申请时间',
                      key: '1585627223587',
                      model: 'applytime',
                      rules: []
                    }
                  ]
                },
                {
                  span: 12,
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  list: [
                    {
                      type: 'radio',
                      icon: 'icon-radio-active',
                      options: {
                        inline: false,
                        defaultValue: '',
                        showLabel: false,
                        options: [],
                        required: false,
                        width: '',
                        remote: true,
                        remoteType: 'option',
                        remoteOption: 'option_type',
                        remoteOptions: [],
                        props: {
                          value: 'value',
                          label: 'label'
                        },
                        remoteFunc: 'func_1585627270947',
                        customClass: '',
                        labelWidth: 100,
                        isLabelWidth: false,
                        hidden: false,
                        dataBind: true,
                        disabled: false
                      },
                      name: '变更类别',
                      novalid: {},
                      key: '1585627270947',
                      model: 'type',
                      rules: []
                    }
                  ]
                }
              ],
              options: {
                gutter: 0,
                justify: 'start',
                align: 'top',
                customClass: '',
                hidden: false,
                flex: true,
                responsive: false,
                remoteFunc: 'func_1585627155754',
                remoteOption: 'option_1585627155754'
              },
              name: '栅格布局',
              novalid: {},
              key: '1585627155754',
              model: 'grid_1585627155754',
              rules: []
            },
            {
              type: 'grid',
              icon: 'icon-RectangleCopy',
              columns: [
                {
                  span: 12,
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  list: [
                    {
                      type: 'radio',
                      icon: 'icon-radio-active',
                      options: {
                        inline: false,
                        defaultValue: '',
                        showLabel: false,
                        options: [],
                        required: false,
                        width: '',
                        remote: true,
                        remoteType: 'option',
                        remoteOption: 'option_grade',
                        remoteOptions: [],
                        props: {
                          value: 'value',
                          label: 'label'
                        },
                        remoteFunc: 'func_1585627292493',
                        customClass: '',
                        labelWidth: 100,
                        isLabelWidth: false,
                        hidden: false,
                        dataBind: true,
                        disabled: false
                      },
                      name: '变更等级',
                      novalid: {},
                      key: '1585627292493',
                      model: 'grade',
                      rules: []
                    }
                  ]
                },
                {
                  span: 12,
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  list: [
                    {
                      type: 'select',
                      icon: 'icon-select',
                      options: {
                        defaultValue: '',
                        multiple: false,
                        disabled: false,
                        clearable: false,
                        placeholder: '',
                        required: false,
                        showLabel: false,
                        width: '',
                        options: [],
                        remote: true,
                        remoteType: 'func',
                        remoteOption: 'option_template',
                        filterable: true,
                        remoteOptions: [],
                        props: {
                          value: 'value',
                          label: 'label'
                        },
                        remoteFunc: 'func_template',
                        customClass: '',
                        labelWidth: 100,
                        isLabelWidth: false,
                        hidden: false,
                        dataBind: true
                      },
                      name: '变更模板',
                      novalid: {},
                      key: '1585627304696',
                      model: 'template',
                      rules: []
                    }
                  ]
                }
              ],
              options: {
                gutter: 0,
                justify: 'start',
                align: 'top',
                customClass: '',
                hidden: false,
                flex: true,
                responsive: false,
                remoteFunc: 'func_1585627290115',
                remoteOption: 'option_1585627290115'
              },
              name: '栅格布局',
              novalid: {},
              key: '1585627290115',
              model: 'grid_1585627290115',
              rules: []
            },
            {
              type: 'cascader',
              icon: 'icon-jilianxuanze',
              options: {
                defaultValue: [],
                width: '',
                placeholder: '',
                disabled: false,
                clearable: false,
                remote: true,
                remoteType: 'func',
                remoteOption: 'option_applicationsystem',
                remoteOptions: [],
                props: {
                  value: 'value',
                  label: 'label',
                  children: 'children'
                },
                remoteFunc: 'func_classification',
                customClass: '',
                labelWidth: 100,
                isLabelWidth: false,
                hidden: false,
                dataBind: true
              },
              name: '变更分类',
              key: '1586506830843',
              model: 'classification',
              rules: []
            },
            {
              type: 'select',
              icon: 'icon-select',
              options: {
                defaultValue: '',
                multiple: false,
                disabled: false,
                clearable: false,
                placeholder: '',
                required: false,
                showLabel: false,
                width: '',
                options: [],
                remote: true,
                remoteType: 'func',
                remoteOption: 'option_1585627327062',
                filterable: true,
                remoteOptions: [],
                props: {
                  value: 'value',
                  label: 'label'
                },
                remoteFunc: 'func_applicationsystem',
                customClass: '',
                labelWidth: 100,
                isLabelWidth: false,
                hidden: false,
                dataBind: true
              },
              name: '应用系统',
              novalid: {},
              key: '1586503783266',
              model: 'applicationsystem',
              rules: []
            },
            {
              type: 'input',
              icon: 'icon-input',
              options: {
                width: '100%',
                defaultValue: '',
                required: false,
                dataType: 'string',
                pattern: '',
                placeholder: '',
                customClass: '',
                disabled: false,
                labelWidth: 100,
                isLabelWidth: false,
                hidden: false,
                dataBind: true,
                showPassword: false,
                remoteFunc: 'func_1585634624990',
                remoteOption: 'option_1585634624990'
              },
              name: '标题',
              novalid: {},
              key: '1586503709455',
              model: 'title',
              rules: [
                {
                  type: 'string',
                  message: '格式不正确'
                }
              ]
            },
            {
              type: 'textarea',
              icon: 'icon-diy-com-textarea',
              options: {
                width: '100%',
                defaultValue: '',
                required: false,
                disabled: false,
                pattern: '',
                placeholder: '',
                customClass: '',
                labelWidth: 100,
                isLabelWidth: false,
                hidden: false,
                dataBind: true,
                remoteFunc: 'func_1585634638956',
                remoteOption: 'option_1585634638956'
              },
              name: '描述',
              novalid: {},
              key: '1586503715719',
              model: 'description',
              rules: []
            },
            {
              type: 'fileupload',
              icon: 'icon-wenjianshangchuan',
              options: {
                defaultValue: [],
                width: '',
                tokenFunc: 'funcGetToken',
                token: '',
                domain: 'http://tcdn.form.xiaoyaoji.cn/',
                disabled: false,
                tip: '',
                action: 'http://tools-server.xiaoyaoji.cn/api/transfer',
                customClass: '',
                limit: 9,
                multiple: false,
                isQiniu: true,
                labelWidth: 100,
                isLabelWidth: false,
                hidden: false,
                dataBind: true,
                headers: [],
                remoteFunc: 'func_1585634649321',
                remoteOption: 'option_1585634649321'
              },
              name: '描述附件',
              novalid: {},
              key: '1586503718585',
              model: 'descriptionattachment',
              rules: []
            },
            {
              type: 'textarea',
              icon: 'icon-diy-com-textarea',
              options: {
                width: '100%',
                defaultValue: '',
                required: false,
                disabled: false,
                pattern: '',
                placeholder: '',
                customClass: '',
                labelWidth: 100,
                isLabelWidth: false,
                hidden: false,
                dataBind: true,
                remoteFunc: 'func_1585634662273',
                remoteOption: 'option_1585634662273'
              },
              name: '变更原因',
              novalid: {},
              key: '1586503721192',
              model: 'cause',
              rules: []
            },
            {
              type: 'select',
              icon: 'icon-select',
              options: {
                defaultValue: [],
                multiple: true,
                disabled: false,
                clearable: false,
                placeholder: '',
                required: false,
                showLabel: false,
                width: '',
                options: [
                  {
                    value: 'Option 1'
                  },
                  {
                    value: 'Option 2'
                  },
                  {
                    value: 'Option 3'
                  }
                ],
                remote: true,
                remoteType: 'func',
                remoteOption: 'option_1585634690306',
                filterable: true,
                remoteOptions: [],
                props: {
                  value: 'value',
                  label: 'label'
                },
                remoteFunc: 'func_influence',
                customClass: '',
                labelWidth: 100,
                isLabelWidth: false,
                hidden: false,
                dataBind: true
              },
              name: '变更影响',
              novalid: {},
              key: '1586503724632',
              model: 'influence',
              rules: []
            },
            {
              type: 'textarea',
              icon: 'icon-diy-com-textarea',
              options: {
                width: '100%',
                defaultValue: '',
                required: false,
                disabled: false,
                pattern: '',
                placeholder: '',
                customClass: '',
                labelWidth: 100,
                isLabelWidth: false,
                hidden: false,
                dataBind: true,
                remoteFunc: 'func_1585634704776',
                remoteOption: 'option_1585634704776'
              },
              name: '详细影响分析',
              novalid: {},
              key: '1586503727272',
              model: 'influenceanalyze',
              rules: []
            },
            {
              type: 'textarea',
              icon: 'icon-diy-com-textarea',
              options: {
                width: '100%',
                defaultValue: '',
                required: false,
                disabled: false,
                pattern: '',
                placeholder: '',
                customClass: '',
                labelWidth: 100,
                isLabelWidth: false,
                hidden: false,
                dataBind: true,
                remoteFunc: 'func_1585634714920',
                remoteOption: 'option_1585634714920'
              },
              name: '变更方案',
              novalid: {},
              key: '1586503731831',
              model: 'blueprint',
              rules: []
            },
            {
              type: 'fileupload',
              icon: 'icon-wenjianshangchuan',
              options: {
                defaultValue: [],
                width: '',
                tokenFunc: 'funcGetToken',
                token: '',
                domain: 'http://tcdn.form.xiaoyaoji.cn/',
                disabled: false,
                tip: '',
                action: 'http://tools-server.xiaoyaoji.cn/api/transfer',
                customClass: '',
                limit: 9,
                multiple: false,
                isQiniu: true,
                labelWidth: 100,
                isLabelWidth: false,
                hidden: false,
                dataBind: true,
                headers: [],
                remoteFunc: 'func_1585634723667',
                remoteOption: 'option_1585634723667'
              },
              name: '变更方案附件',
              novalid: {},
              key: '1586503735755',
              model: 'blueprintattachment',
              rules: []
            }
          ]
        }
      ],
      options: {
        gutter: 0,
        justify: 'start',
        align: 'top',
        customClass: '',
        hidden: false,
        flex: true,
        responsive: false,
        remoteFunc: 'func_1585627042369',
        remoteOption: 'option_1585627042369'
      },
      name: '栅格布局',
      key: '1585627042369',
      model: 'handle',
      rules: []
    },
    {
      type: 'table',
      icon: 'icon-table',
      options: {
        defaultValue: [],
        customClass: '',
        labelWidth: 100,
        isLabelWidth: true,
        hidden: false,
        dataBind: true,
        disabled: false,
        remoteFunc: 'func_1585634789528',
        remoteOption: 'option_1585634789528'
      },
      tableColumns: [
        {
          type: 'select',
          icon: 'icon-select',
          options: {
            defaultValue: '',
            multiple: false,
            disabled: false,
            clearable: false,
            placeholder: '',
            required: false,
            showLabel: false,
            width: '200px',
            options: [],
            remote: true,
            remoteType: 'func',
            remoteOption: 'option_1585634966536',
            filterable: true,
            remoteOptions: [],
            props: {
              value: 'value',
              label: 'label'
            },
            remoteFunc: 'func_executor',
            customClass: '',
            labelWidth: 100,
            isLabelWidth: false,
            hidden: false,
            dataBind: true,
            tableColumn: true
          },
          name: '执行人',
          novalid: {},
          key: '1585634966536',
          model: 'executor',
          rules: []
        },
        {
          type: 'date',
          icon: 'icon-date',
          options: {
            defaultValue: '',
            readonly: false,
            disabled: false,
            editable: true,
            clearable: true,
            placeholder: '',
            startPlaceholder: '',
            endPlaceholder: '',
            type: 'datetime',
            format: 'yyyy-MM-dd HH:mm:ss',
            timestamp: false,
            required: false,
            width: '200px',
            customClass: '',
            labelWidth: 100,
            isLabelWidth: false,
            hidden: false,
            dataBind: true,
            remoteFunc: 'func_1585635017425',
            remoteOption: 'option_1585635017425',
            tableColumn: true,
            onChange: 'checkPlantime'
          },
          name: '计划开始时间',
          novalid: {},
          key: '1585635017425',
          model: 'planstarttime',
          rules: []
        },
        {
          type: 'date',
          icon: 'icon-date',
          options: {
            defaultValue: '',
            readonly: false,
            disabled: false,
            editable: true,
            clearable: true,
            placeholder: '',
            startPlaceholder: '',
            endPlaceholder: '',
            type: 'datetime',
            format: 'yyyy-MM-dd HH:mm:ss',
            timestamp: false,
            required: false,
            width: '200px',
            customClass: '',
            labelWidth: 100,
            isLabelWidth: false,
            hidden: false,
            dataBind: true,
            remoteFunc: 'func_1585635017425',
            remoteOption: 'option_1585635017425',
            tableColumn: true,
            onChange: 'checkPlantime'
          },
          name: '计划结束时间',
          novalid: {},
          key: '1585635049006',
          model: 'planendtime',
          rules: []
        },
        {
          type: 'input',
          icon: 'icon-input',
          options: {
            width: '200px',
            defaultValue: '',
            required: false,
            dataType: 'string',
            pattern: '',
            placeholder: '',
            customClass: '',
            disabled: false,
            labelWidth: 100,
            isLabelWidth: false,
            hidden: false,
            dataBind: true,
            showPassword: false,
            remoteFunc: 'func_1585635321704',
            remoteOption: 'option_1585635321704',
            tableColumn: true
          },
          name: '标题',
          novalid: {},
          key: '1585635321704',
          model: 'titile_sub',
          rules: [
            {
              type: 'string',
              message: '标题格式不正确'
            }
          ]
        },
        {
          type: 'textarea',
          icon: 'icon-diy-com-textarea',
          options: {
            width: '200px',
            defaultValue: '',
            required: false,
            disabled: false,
            pattern: '',
            placeholder: '',
            customClass: '',
            labelWidth: 100,
            isLabelWidth: false,
            hidden: false,
            dataBind: true,
            remoteFunc: 'func_1585635326644',
            remoteOption: 'option_1585635326644',
            tableColumn: true
          },
          name: '描述',
          novalid: {},
          key: '1585635326644',
          model: 'description_sub',
          rules: []
        }
      ],
      name: '实施发布任务',
      novalid: {},
      key: '1585648774000',
      model: 'subform',
      rules: []
    },
    {
      type: 'grid',
      icon: 'icon-RectangleCopy',
      columns: [
        {
          span: 24,
          xs: 12,
          sm: 12,
          md: 12,
          lg: 12,
          xl: 12,
          list: [
            {
              type: 'divider',
              icon: 'icon-fengexian',
              options: {
                hidden: false,
                contentPosition: 'center',
                remoteFunc: 'func_1585635484852',
                remoteOption: 'option_1585635484852'
              },
              name: '关闭信息',
              novalid: {},
              key: '1585635484852',
              model: 'divider_1585635484852',
              rules: []
            },
            {
              type: 'textarea',
              icon: 'icon-diy-com-textarea',
              options: {
                width: '100%',
                defaultValue: '',
                required: false,
                disabled: false,
                pattern: '',
                placeholder: '',
                customClass: '',
                labelWidth: 100,
                isLabelWidth: false,
                hidden: false,
                dataBind: true,
                remoteFunc: 'func_1585636876370',
                remoteOption: 'option_1585636876370'
              },
              name: '变更结果',
              novalid: {},
              key: '1585636876370',
              model: 'result',
              rules: []
            },
            {
              type: 'radio',
              icon: 'icon-radio-active',
              options: {
                inline: false,
                defaultValue: '',
                showLabel: false,
                options: [],
                required: false,
                width: '',
                remote: true,
                remoteType: 'option',
                remoteOption: 'option_closecode',
                remoteOptions: [],
                props: {
                  value: 'value',
                  label: 'label'
                },
                remoteFunc: 'func_1585636916246',
                customClass: '',
                labelWidth: 100,
                isLabelWidth: false,
                hidden: false,
                dataBind: true,
                disabled: false
              },
              name: '关闭代码',
              novalid: {},
              key: '1586241075327',
              model: 'closecode',
              rules: []
            },
            {
              type: 'grid',
              icon: 'icon-RectangleCopy',
              columns: [
                {
                  span: 12,
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  list: [
                    {
                      type: 'select',
                      icon: 'icon-select',
                      options: {
                        defaultValue: '',
                        multiple: false,
                        disabled: false,
                        clearable: false,
                        placeholder: '',
                        required: false,
                        showLabel: false,
                        width: '',
                        options: [],
                        remote: true,
                        remoteType: 'func',
                        remoteOption: 'option_1585636933218',
                        filterable: true,
                        remoteOptions: [],
                        props: {
                          value: 'value',
                          label: 'label'
                        },
                        remoteFunc: 'func_closeuser',
                        customClass: '',
                        labelWidth: 100,
                        isLabelWidth: false,
                        hidden: false,
                        dataBind: true
                      },
                      name: '关闭人',
                      novalid: {},
                      key: '1585636933218',
                      model: 'closeuser',
                      rules: []
                    }
                  ]
                },
                {
                  span: 12,
                  xs: 12,
                  sm: 12,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  list: [
                    {
                      type: 'date',
                      icon: 'icon-date',
                      options: {
                        defaultValue: '',
                        readonly: false,
                        disabled: false,
                        editable: true,
                        clearable: true,
                        placeholder: '',
                        startPlaceholder: '',
                        endPlaceholder: '',
                        type: 'date',
                        format: 'yyyy-MM-dd HH:mm:ss',
                        timestamp: false,
                        required: false,
                        width: '',
                        customClass: '',
                        labelWidth: 100,
                        isLabelWidth: false,
                        hidden: false,
                        dataBind: true,
                        remoteFunc: 'func_1585636956663',
                        remoteOption: 'option_1585636956663'
                      },
                      name: '关闭时间',
                      novalid: {},
                      key: '1585636956663',
                      model: 'closetime',
                      rules: []
                    }
                  ]
                }
              ],
              options: {
                gutter: 0,
                justify: 'start',
                align: 'top',
                customClass: '',
                hidden: false,
                flex: true,
                responsive: false,
                remoteFunc: 'func_1585636927896',
                remoteOption: 'option_1585636927896'
              },
              name: '栅格布局',
              novalid: {},
              key: '1586241079918',
              model: 'grid_1585636927896',
              rules: []
            }
          ]
        }
      ],
      options: {
        gutter: 0,
        justify: 'start',
        align: 'top',
        customClass: '',
        hidden: false,
        flex: true,
        responsive: false,
        remoteFunc: 'func_1585635479545',
        remoteOption: 'option_1585635479545'
      },
      name: '栅格布局',
      key: '1585635479545',
      model: 'handle1',
      rules: []
    }
  ]
}
export default mockData

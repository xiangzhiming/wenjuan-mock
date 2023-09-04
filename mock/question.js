const Mock = require('mockjs')
const getQuestionList = require('./data/getQuestionList')
const getComponentList = require('./data/getComponentList')

const Random = Mock.Random

module.exports = [
    {
        // 获取单个问卷信息
        url: '/api/question/:id',
        method: 'get',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id(),
                    title: Random.ctitle(),
                    desc: '问卷描述',
                    js: '',
                    css: '',
                    isDeleted: false,
                    isPublished: true,
                    // componentList: getComponentList()
                    componentList: [
                        {
                            fe_id: Random.id(),
                            type: "questionTitle",
                            title: "标题",
                            isHidden: false,  // 是否隐藏，false默认不隐藏
                            props: {text: "个人信息调研", level: 1, isCenter: false}
                        },
                        {
                            fe_id: Random.id(),
                            type: "questionInput",
                            title: "输入框",
                            isHidden: false,  // 是否隐藏，false默认不隐藏
                            props: {title: "你的姓名", placeholder: "请输入姓名...."}
                        },
                        {
                            fe_id: Random.id(),
                            type: "questionInput",
                            title: "输入框2",
                            isHidden: false,  // 是否隐藏，false默认不隐藏
                            props: {title: "你的电话", placeholder: "请输入电话...."}
                        }
                    ]
                }

                // errno: 1002,
                // msg: '错误测试'
            }
        }
    },
    {
        // 创建问卷
        url: '/api/question',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    {
        // 获取（查询）问卷列表
        url: '/api/question',
        method: 'get',
        response(ctx) {
            const { url = '', query = {} } = ctx
            const isDeleted = url.indexOf('isDeleted=true') >= 0
            const isStar = url.indexOf('isStar=true') >= 0
            const pageSize = parseInt(query.pageSize) || 10

            return {
                errno: 0,
                data: {
                    list: getQuestionList({ len: pageSize, isDeleted, isStar }), // 当前页
                    total: 100 // 总数，用于分页
                }
            }
        }
    },
    {
        // 更新问卷
        url: '/api/question/:id',
        method: 'patch',
        response() {
            return {
                errno: 0
            }
        }
    },
    {
        // 复制问卷
        url: '/api/question/duplicate/:id',
        method: 'post',
        response() {
            return {
                errno: 0,
                data: {
                    id: Random.id()
                }
            }
        }
    },
    {
        // 批量彻底删除
        url: '/api/question',
        method: 'delete',
        response() {
            return {
                errno: 0
            }
        }
    }
]

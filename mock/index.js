const test = require('./test')
const question = require('./question')
const user = require('./user')
const stat = require('./stat')
const answer = require('./answer')

const mockList = [
    ...test,
    ...question,
    ...user,
    ...answer
]

module.exports = mockList

const express = require('express')
const jwt = require('jsonwebtoken')

// 得到路由器对象
const router = express.Router()


// 搜索请求
let searchList = require('./datas/search/searchList.json')
router.post('/search', (req, res) => {
  const {keyword} = req.body
	res.send({
		status : 1,
		datas:searchList
	})
})

require('./money.js')(router)
require('./category.js')(router)
require('./buyList.js')(router)
require('./msite.js')(router)
require('./more.js')(router)
require('./profile.js')(router)
require('./sendCode.js')(router)

module.exports = router


module.exports = function (router) {
  
  // 请求领券中心的商品列表
	let centerDatas = require('./datas/more/list.json')
	router.get('/center/centerGoods', (req, res) => {
		res.send({
			status:1,
			datas:centerDatas
		})
	})

	// 请求领券中心头部
	let centerHeader = require('./datas/more/navHeader.json')
	router.get('/center/centerHeader', (req, res) => {
		res.send({
			status:1,
			datas:centerHeader
		})
	})
		
	// 请求更多频道广场的数据
	let moreList = require('./datas/more/plaza.json')
	router.get('/moreList', (req, res) => {
		res.send({
			status:1,
			datas:moreList
		})
	 return router
	})
}
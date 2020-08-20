

module.exports = function (router) {
  
  // 请求必买清单列表
	let mustBuy = require('./datas/buyList/buyList.json')
	router.get('/buyList/mustBuy', (req, res) => {
		res.send({
			status:1,
			datas:mustBuy
		})
	})

	// 请求家电列表
	let electrics = require('./datas/buyList/electrics.json')
	router.get('/buyList/electrics', (req, res) => {
		res.send({
			status:1,
			datas:electrics
		})
	})
	
	// // 请求酷机列表
	let coolMachine = require('./datas/buyList/coolMachine.json')
	router.get('/buyList/coolMachine', (req, res) => {
		res.send({
			status:1,
			datas:coolMachine
		})
	})
	
	// 请求头部导航
	let headerNav = require('./datas/buyList/headerNav.json')
	router.get('/buyList/headerNav', (req, res) => {
		// const {categoryName} = req.body
		res.send({
			status:1,
			datas:headerNav
		})
	})
	
	
	
 return router

}
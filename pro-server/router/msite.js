

module.exports = function (router) {
  
  // 请求首页的猜你喜欢商品列表
	let homegoods = require('./datas/msite/goods.json')
	router.get('/msite/homegoods', (req, res) => {
		
		res.send({
			status:1,
			datas:homegoods
		})
	})

	// 请求首页的商品分类列表
	let categories = require('./datas/msite/category.json')
	router.get('/msite/category', (req, res) => {
		res.send({
			status:1,
			datas:categories
		})
	})

	// 请求首页的
	let desc = require('./datas/msite/desc.json')
	router.get('/msite/desc', (req, res) => {
		res.send({
			status:1,
			datas:desc
		})
	})
	
 return router

}


module.exports = function (router) {
  
  // 个人中心页猜你喜欢商品列表
	let guessLike = require('./datas/profile/guessLike.json')
	router.get('/profile/guessLike', (req, res) => {
		// const {categoryName} = req.body
		res.send({
			status:1,
			datas:guessLike
		})
	})


 return router

}
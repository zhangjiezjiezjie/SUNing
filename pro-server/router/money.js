// let datas = require('./datas/timeLimitDatas/xs-goods2.json')

module.exports = function (router) {
  
  // 请求赚钱页的轮播图片
	let bannerImgs = require('./datas/moneyDatas/zq-banner.json')
	router.get('/money/getRecommendBanner', (req, res) => {
		// const {categoryName} = req.body
		res.send({
			status:1,
			datas:bannerImgs 
		})
	})
	
	// 赚钱页的个性推荐的金融优选
	let bank = require('./datas/moneyDatas/zq-bank.json')
	router.get('/money/getRecommendBank', (req, res) => {
		res.send({
			status:1,
			datas:bank
		})
	})
	
	// 赚钱页的获取财富秘籍的金融资讯
	let consult = require('./datas/moneyDatas/cf-consult.json')
	router.get('/money/getWealthConsult', (req, res) => {
		res.send({
			status:1,
			datas:consult
		})
	})
	// 赚钱页的10个图标
	let gates = require('./datas/moneyDatas/zq-gate.json')
	router.get('/money/getGate', (req, res) => {
		res.send({
			status:1,
			datas:gates
		})
	})
 return router

}
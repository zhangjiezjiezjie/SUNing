const express = require('express')

// 创建应用对象
const app = express()

//禁止服务器返回powered-by,意思是说明搭建服务器的工具，服务器是基于什么搭建起来的，安全性
app.disable('X-Powered-By');

// 暴露静态资源，使用户直接在地址栏输入地址也可以看得见
app.use(express.static('public'))

// 声明使用解析post请求的中间件
app.use(express.urlencoded({extended: true})) // 请求体参数是: name=tom&pwd=123

// 声明使用路由器中间件
const indexRouter = require('./router')
app.use(indexRouter)

//测试接口
app.get('/',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')  // 设置响应头解决跨域
	res.send('我是主页')
})

app.post('/test',(req,res)=>{
	
	res.send(req.body)
})


// 首页的10个图标处
app.get('/iconList',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	res.send('')
})


//给服务器指定端口
app.listen(3000,function (err) {
	if (!err){
			console.log('服务器连接成功')
			console.log('服务器地址：http://localhost:3000')
	} else {
			console.log('服务器连接失败')
	}
})
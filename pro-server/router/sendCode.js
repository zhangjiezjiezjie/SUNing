const sms_util = require('../utils/sms_util')
var jwt = require('jsonwebtoken')
const users = {}
module.exports = function (router) {
  
  // 获取验证码
	router.get('/reqCode', (req, res) => {
		 //1. 获取请求参数数据
     var phone = req.query.phone;
     //2. 处理数据
     //生成验证码(6位随机数)
     var code = sms_util.randomCode(4);
     //发送给指定的手机号
     console.log(`向${phone}发送验证码短信: ${code}`);
     sms_util.sendCode(phone, code, function (success){//success表示是否成功
       if (success) {
         users[phone] = code
         console.log('保存验证码: ', phone, code)
         res.send({"code": 1})
       } else {
         //3. 返回响应数据
         res.send({"code": 0, msg: '短信验证码发送失败'})
       }
     })
	})

  // 请求短信登陆
router.post('/loginSms', function (req, res, next) {
  var phone = req.body.phone;
  var code = req.body.code;
  console.log(phone,code)
  if (users[phone] != code) {
    res.send({code: 0, msg: '手机号或验证码不正确'});
    return;
  }else {
    const token = jwt.sign({id: 1234567890}, '100k', { expiresIn: '7 days' });
    delete users.username
    users.token = token
	  users.phone = phone
    res.send({code: 1,data : users})
  }
  //删除保存的code
  delete users[phone];
})

// 用户名登录
router.post('/loginText', (req, res) => {
  const {username, pwd} = req.body
  console.log(req.body)
	if(username == '100k' && pwd == '123123'){
		//签发token 指定过期时间 7 天
    const token = jwt.sign({id: 1234567890}, '100k', { expiresIn: '7 days' });
    delete users.phone
    users.token = token
	  users.username = username
		res.send({
			status: 1, 
			data: {
				users
			}
		})
	}else {
		res.send({
			status: 0, 
			errMsg: '账户名或密码错误，请重新登录'
		})
	}
})

// 自动登录
/*
根据请求携带的token查询对应的user
 */
router.get('/auto_login', function(req, res) {
  // 得到请求头中的token
  const token = req.headers['authorization']
  
  // 如果请求头中没有token, 直接返回
  if (!token) {
    return res.send({code: 0, msg: '请先登陆'})
  }
  
  // 解码token, 如果失败或过了有效期, 返回401
  const decoded = jwt.decode(token, '100k')
  if (!decoded || decoded.exp < Date.now() / 1000) {
    res.status(401)
    return res.json({ message: 'token过期，请重新登录' })
  }

  // 根据解码出的用户id, 查询得到对应的user, 返回给客户端
  res.send({code: 1,users})
})

 return router

}
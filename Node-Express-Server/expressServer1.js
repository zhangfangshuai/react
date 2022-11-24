const express = require('express')

// 创建一个express
const app = express()
/*
    express可以启动两种服务器： web网站服务器 和 API接口服务器
 */

// 调用app.listen(port, 启动成功回调)启动Web服务器
app.listen(3300, () => {
    console.log('express server start success \nServer running at http://localhost:3300');
})

// 请求中间件，类似于请求拦截器，每个请求都会执行本命令
app.use((request, response, next) => {
    console.log(`Express Web服务器被请求，请求方法：${request.method}， 请求API：${request.url}，来自于${request.get('Host')}` )
    next()
})


// 监听get请求，响应请求 app.get('请求路径', handler(request, response){ response.send('响应数据给客户端') })
    // request：请求对象，包含与请求相关的属性和方法
    // response: 响应对象，包含与响应相关的属性和方法
// 获取URL参数
    // 获取URL中的查询参数，使用 request.query；
    // 获取URL中动态参数，使用 request.params
app.get('/students', function(request, response) {
    const students = [
        { id: '001', name: 'tom', age: 18 },
        { id: '002', name: 'jerry', age: 19 },
        { id: '003', name: 'tony', age: 22 },
        { id: '004', name: 'lucy', age: 25 },
    ]
    response.send(students)
})

// 监听post，参数同get
app.post('/students', function(request, response) {
    // todo
})



// 托管静态资源，启动静态服务器，使用express.static()
// 将当前目录下的public文件夹作为静态资源服务器，可以通过前端项目启动的端口直接访问，如 http://localhost:3000/image/bg.png
// app.use(express.static('public'))
// 如果需要挂载路径前缀，则 app.use('/public', express.static('public'))




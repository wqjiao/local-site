## 创建本地服务

* 1.搭建 `node` 服务，访问本地站点文件

- 安装 [nodejs](https://nodejs.org/zh-cn/)

- 创建本地站点文件夹 `mkdir local-site`

- 进入文件夹 `cd local-site`

- 初始化项目 `npm init`

- 创建 `index.js` 文件，搭建 `server` 服务

```js
let http = require('http');
let fs = require('fs'); // 引入文件读取模块
// 本地站点文件存放目录路径 local-site
let documentRoot = 'D:/工作文档/workShop/local-site';

let server = http.createServer(function (req, res) {

    // 客户端输入的url，例如：输入localhost:8888/index.html 相当于 url = /index.html
    // D:/工作文档/workShop/local-site/index.html 
    let file = documentRoot + req.url;
    // console.log(url);
    
    /**
     * @param {String} file 文件路径
     * @param {*} function 回调函数返回文本内容
    */
    fs.readFile(file, function (err, data) {
        if (err) {
            res.writeHeader(404, {
                'content-type': 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        } else {
            res.writeHeader(200, {
                'content-type': 'text/html;charset="utf-8"'
            });
            res.write(data); // 将 index.html 显示在客户端
            res.end();
        }
    });
});

// 添加端口号
server.listen(8888, () => {
    console.log('Your App is running at http://localhost:%s', 8888);
});

console.log('服务器开启成功');
```

* 2.安装 `web server` 小工具，启动服务

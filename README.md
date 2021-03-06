# webpack study 学习第一季

# 主要功能点

### 从配置看

1. entry， 入口。
2. output，输出。
3. module， loader等。
4. plugins，插件。

### 从loader看

1. css-loader。
2. style-loader。
3. less-loader。
4. babel-loader。
5. postcss-loader。

### 从插件看

1. html-webpack-plugin。
2. clean-webpack-plugin。
3. extract-text-webpack-plugin。
4. BannerPlugin。
5. UglifyJsPlugin。

更多详细信息，留意上一节：[https://github.com/vini123/webpack_s0](https://github.com/vini123/webpack_s0)

# ~~2017-10-13~~

新增两个loader和两个插件。

1. loader1。 babel, 用来处理es6语法以及jsx。
2. loader2。 postcss，用来给css加上平台前缀的。
3. 插件1。 BannerPlugin，给js首行加上注释文字信息。比如版权说明等。
4. 插件2。 UglifyJsPlugin，对js进行压缩。

# babel

babel，是一个 javascript 的一个编译平台。这个使得js使用es6语法而不怕不被浏览器支持，以及使用jsx。先来安装babel。

```
# babel-core babel的核心
# babel-loader 
# babel-preset-es215 将es6语法转换成es6以下的语法
# babel-preset-react 解析jsx
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```
babel 配置

```
{
  # 正则，匹配以.js或.jsx结尾的文件
  test:/\.(js|jsx)$/,
  use:{
    loader: 'babel-loader',
    options:{
      presets:['es2015', 'react']
    },
    exclude: /node_modules/
  }
}
```
后边随着处理的事情越来越多，babel的配置也会越来越复杂。所以，babel的配置，可以单独拿出来，写在跟目录下的 **.babelrc** 文件中。这个本来，就是babel的配置文件的。如。
```
# .babelrc文件
{
  options:{
    'presets':['es2015', 'react']
  }
}
```

分别通过运行 **npm test**  和 **npm run dev** 来打包（两个使用了不同的配置），来看看 es6 语法的转换情况。如果使用了react，也要安装react，本npm配置中没有添加。

```
npm install --save-dev react react-dom
```
更多信息，请看es6语法，babel，以及jsx。

# postcss

postcss也是一个处理css的平台，用来为CSS代码自动添加适应不同浏览器的CSS前缀。

安装。

```
npm install --save-dev postcss-loader autoprefixer
```

postcss配置。
{
 test:/\.(css|less)$/,
 use:[
   {loader:'css-loader'}, 
   {loader:'style-loader'}, 
   {loader:'postcss-loader'}
   ]
}

和babel一样，postcss也有一个独立的配置文件，默认为根目录下的 **postcss.config.js**

```
// postcss.config.js
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}
```

# BannerPlugin 插件

在js的首行加入注释说明。如版权说明等。

在 plugins中添加插件。
```
plugins:[
  ……
  new webpack.BannerPlugin('欢迎翻版，翻版必究')
]
```

# UglifyJsPlugin 插件

压缩js代码。

在 plugins 中添加插件。

```
plugins:[
  ……
  new webpack.optimize.UglifyJsPlugin()
]
```
其实有更多的插件，有更多的loader。表示这里忙不过来。

# ~~2017-10-11~~

# 项目运行截图

![image](https://blog.vini123.com/wp-content/uploads/2017/10/20171011173345.png?r=5)

![image](https://blog.vini123.com/wp-content/uploads/2017/10/20171011173450.png?r=5)

# 代码使用

```
//将项目下载到本地
git clone xxx

// 进入终端，进入到项目目录中
cd webpack_s1

// 对依赖进行安装
npm install

// 运行打包，使用的配置文件是 webpack.config.js
npm test

// 运行打包2，使用的配置文件是 webpack.dev.config.js
npm run dev 
```

# 额外

less打包参考： [https://segmentfault.com/a/1190000008812504](https://segmentfault.com/a/1190000008812504)

less快如入门： [http://lesscss.cn/](http://lesscss.cn/)

ui框架： [http://www.iviewui.com/](http://www.iviewui.com/)

webpack案例：[https://github.com/wjf444128852/react-webpack](https://github.com/wjf444128852/react-webpack)

热门文章：[http://www.cnblogs.com/-walker/p/6056529.html](http://www.cnblogs.com/-walker/p/6056529.html)

知乎：[https://www.zhihu.com/question/39290543](https://www.zhihu.com/question/39290543)


# 前言
此项目是 vue + vant 对小德子（服务员点餐app的重构），为了更好的用户体验。之前的小德子是用jQuery写，用户体验跟交互上很差。所以这次就用vue来重构。我只是一个初学vue的人，所以这个项目花了两天的时间写，还有很多的功能都未完善，主要是巩固vue的知识语法等知识。可能有很多很low的地方，有错误的地方希望大家可以请直接在 Issues 中提，一起探讨学习。
# 说明
这个项目会持续更新。
# 技术栈
vue2 + vuex + vue-router + webpack + ES6 + less + vant-ui
# 项目运行
git clone https://github.com/zhangjinye/-app.git

npm install

npm run dev
# 效果演示
<html>
<head>
    <style  type="text/css">
        .images-content{
            overflow: hidden;
        }
        .images-content .list-content{
            list-style: none;
        }
        .images-content .list-item{
            float: left;
            max-width: 375px;
        }
    </style>
</head>

<div>
    <img src="http://m.decerp.cn/indeximg/vuecatering.png" width=300 height=390 />
</div>
<h1>部分截图</h1>
<div class="images-content">
    <ul>
        <li class="list-item">
            <img src="http://m.decerp.cn/indeximg/new1.png" />
        </li>
        <li class="list-item">
            <img src="http://m.decerp.cn/indeximg/new2.png" />
        </li>
        <li class="list-item">
            <img src="http://m.decerp.cn/indeximg/new3.jpg"/>
        </li>
    </ul>
</div>
</html>

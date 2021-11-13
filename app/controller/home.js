'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 添加登录校验v1 -- 实现简单的验证用户名和密码
  async index() { // login表单界面
    this.ctx.body = `
      <form action = "/login">
        <label>登录名</label><input name="username"><br/>
        <label>密码</label><input type="password" name="password">
        <br/>
        <button>提交</button>
      </form>
      `;
  }
  async login(){ //login逻辑 校验
    const { ctx } = this;
    const username = ctx.query.username;
    const password = ctx.query.password;
    if (username === "admin" && password === "123456") {
      // ctx.body = username.toString()+"<h1>登陆成功</h1>";
      ctx.body = "<h1>登陆成功</h1>";
    }else{
      ctx.body = "<h1>登陆失败</h1>";
    }

  }

  // http://localhost:7001/
  // async index() {
  //   const { ctx } = this;
  //   const params = ctx.query;
  //   // if(params.name='刘学炜'){
  //   //   ctx.body = {
  //   //     success: false,
  //   //     message: '没有权限',
  //   //     code: 403
  //   //   };
  //   // }
  //   ctx.body = `<p>hi, ${params.name || 'egg'}</p>`;





  // }
  // http://localhost:7001/say-hello.json?name=马跃
  // http://localhost:7001/say-hello.json?name=刘学炜
  async sayHello() {
    const { ctx } = this;
    const params = ctx.query;
    // if(params.name='刘学炜'){
    //   ctx.body = {
    //     success: false,
    //     message: '没有权限',
    //     code: 403
    //   };
    // }
    ctx.body = {
      success: true,
      message: '请求成功',
      data: `hi, ${params.name || 'egg'}`
    };
  }
  //http://localhost:7001/index.htm?name=马跃
  //http://localhost:7001/index.htm?name=刘学炜
  async home() {
    const { ctx } = this;
    const params = ctx.query;
    const result = {
      name: params.name || 'egg',
      title: '前端练习生'
    }
    // nunjucks 模版引擎 插件
    // npm install egg-view-nunjucks --save
    ctx.body = await ctx.renderView('home.html', result);
    // await ctx.render('home.html', result);
    
  }
}

module.exports = HomeController;

'use strict';

const Controller = require('../core/base_controller');

class UserController extends Controller {

  async index() {
    const { ctx } = this;
    ctx.body = 'hi, user';
  }

  async jsonData() {
    this.ctx.body = this.ctx.user;
  }

  async login() {
    await this.ctx.render('user/login.html');
  }

  async loginPost() {
    const { userId, userName, isAdmin } = this.ctx.request.body;
    this.ctx.session.user = {
      userId,
      userName,
      isAdmin: !!isAdmin,
    };

    this.ctx.cookies.set('userId', userId, {
      httpOnly: true, // 默认就是 true
      encrypt: true, // 加密传输
    });
    this.ctx.cookies.set('userName', userName);
    this.ctx.cookies.set('isAdmin', isAdmin);

    await this.ctx.redirect('/');
  }

  async profile() {
    const ctx = this.ctx;
    const token = typeof ctx.session.jwtToken !== 'undefined' ? ctx.session.jwtToken : '';
    if (token === '') {
      ctx.throw(401, 'no token detected in http header "Authorization"');
    }
    // console.log(token);

    let tokenContent;
    try {
      tokenContent = await this.app.jwt.verify(token, this.app.config.jwt.secret); // 如果token过期或验证失败，将抛出错误
      // console.log(tokenContent);
      ctx.body = tokenContent;
    } catch (err) {
      ctx.throw(401, 'invalid token');
    }
  }

}

module.exports = UserController;

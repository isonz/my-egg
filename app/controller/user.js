'use strict';

const Controller = require('../core/base_controller');

class UserController extends Controller {
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

    this.ctx.cookies.set('userId', userId);
    this.ctx.cookies.set('userName', userName);
    this.ctx.cookies.set('isAdmin', isAdmin);

    await this.ctx.redirect('/');
  }

}

module.exports = UserController;

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index() {
    const { ctx } = this;

    let userId = '';
    let userName = '';
    let isAdmin = '';
    // console.log(ctx.session);
    if (ctx.session.user) {
      userId = ctx.session.user.userId;
      userName = ctx.session.user.userName;
      isAdmin = ctx.session.user.isAdmin;
    }
    ctx.body = 'userId : ' + userId + ', userName :' + userName + ', isAdmin :' + isAdmin;
    // ctx.body = ' userId : ' + this.ctx.userId + ', userName :' + this.ctx.user.userName + ', isAdmin :' + this.ctx.user.isAdmin;
  }

  async sessionRemove() {
    const ctx = this.ctx;
    ctx.session.user = null;
    ctx.status = 204;
    ctx.redirect('/');
  }

  async cookies() {
    const { ctx } = this;
    const userId = typeof ctx.cookies.get('userId', { encrypt: true }) !== 'undefined' ? ctx.cookies.get('userId', { encrypt: true }) : '';
    const userName = typeof ctx.cookies.get('userName') !== 'undefined' ? ctx.cookies.get('userName') : '';
    const isAdmin = typeof ctx.cookies.get('isAdmin') !== 'undefined' ? ctx.cookies.get('isAdmin') : '';

    ctx.body = 'userId : ' + userId + ', userName :' + userName + ', isAdmin :' + isAdmin;
  }

  async cookiesRemove() {
    const ctx = this.ctx;
    ctx.cookies.set('userId', null);
    ctx.cookies.set('userName', null);
    ctx.cookies.set('isAdmin', null);
    ctx.status = 204;
    ctx.redirect('/cookies');
  }


}

module.exports = HomeController;

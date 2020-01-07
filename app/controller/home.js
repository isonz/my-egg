'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index() {
    const { ctx } = this;

    let userId = '';
    let userName = '';
    let isAdmin = '';
    if (ctx.session.user) {
      userId = ctx.session.user.userId;
      userName = ctx.session.user.userName;
      isAdmin = ctx.session.user.isAdmin;
    }
    ctx.body = 'userId : ' + userId + ', userName :' + userName + ', isAdmin :' + isAdmin;
  }

  async sessionRemove() {
    const ctx = this.ctx;
    ctx.session.user = null;
    ctx.status = 204;
    ctx.redirect('/');
  }

  async cookies() {
    const { ctx } = this;
    console.log( ctx.cookies.get('userId'));
    const userId = typeof ctx.cookies.get('userId') !== 'undefined' ? ctx.cookies.get('userId') : '';
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

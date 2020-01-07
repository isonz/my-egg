'use strict';

const Controller = require('egg').Controller;

class ErrorController extends Controller {
  async error_404() {
    await this.ctx.render('error/404.html');
  }

  async error_403() {
    await this.ctx.render('error/403.html');
  }

  async error_500() {
    await this.ctx.render('error/500.html');
  }
}

module.exports = ErrorController;

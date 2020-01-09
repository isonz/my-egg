'use strict';

const Controller = require('../core/base_controller');

class AdminController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, admin';
  }
}

module.exports = AdminController;

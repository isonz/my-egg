'use strict';

const Controller = require('../core/base_controller');

class LoginController extends Controller {
  async index() {
    const ctx = this.ctx;
    const token = this.app.jwt.sign({
      username: 'ison',
      password: '123',
      // user_name: ctx.request.body.username,
    }, this.app.config.jwt.secret, {
      expiresIn: '600s',
    });
    ctx.body = {
      token,
    };
    // ctx.response.set('Authorization', token);
    ctx.session.jwtToken = token;
    ctx.status = 200;
  }
}

module.exports = LoginController;

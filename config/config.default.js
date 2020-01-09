/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577691515192_7646';

  // add your middleware config here
  config.middleware = [ 'gzip' ];
  config.onerror = {
    errorPageUrl: '/500.html',
  };
  config.notfound = {
    pageUrl: '/404.html',
  };
  config.session = {
    key: 'SESSID',
    maxAge: 1800 * 1000, // 30分钟
    httpOnly: true,
    encrypt: true,
    renew: true, // 延长会话有效期
  };
  config.jwt = {
    secret: 'fo-san-wu-yin-tui',
  };

  /*
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    domainWhiteList: [ 'http://localhost:8080' ],
  };
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  */

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };


  apps();
  http();
  middlewares();

  return {
    ...config,
    ...userConfig,
  };
};

function http() {

}

function middlewares() {
  exports.middleware = [
    'robot',
  ];
  // robot's configurations
  exports.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };
}

function apps() {
  exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0', // 要proxy
  };

  exports.userservice = {
    service: {
      async getUser(ctx) {
        // Retrieve your user data from cookie, redis, db, whatever
        // For common web applications using cookie, you may get session id with ctx.cookies
        if (!ctx.session.user) {
          return null;
        }
        const { userId, userName, isAdmin } = ctx.session.user;
        return { userId, userName, isAdmin };
      },

      getUserId(ctx) {
        return ctx.user && ctx.user.userId;
      },
    },
  };

}

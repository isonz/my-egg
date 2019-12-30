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
  config.middleware = [];

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
}

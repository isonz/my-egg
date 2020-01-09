'use strict';
//
// /** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
//
// };

/**
 * 把Session放在redis里时取消下面两个plugin的注释
 */

// exports.redis = {
//   enable: true,
//   package: 'egg-redis',
// };

// exports.sessionRedis = {
//   enable: true,
//   package: 'egg-session-redis',
// };


const path = require('path');


exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.ua = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-ua'),
};

exports.userrole = {
  package: 'egg-userrole',
};

exports.userservice = {
  enable: true,
  package: 'egg-userservice',
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

// exports.cors = {
//   enable: true,
//   package: 'egg-cors',
// };

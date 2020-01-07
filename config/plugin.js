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

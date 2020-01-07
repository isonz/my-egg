'use strict';

// eslint-disable-next-line no-unused-vars
module.exports = appInfo => {

  exports.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'admin888',
      database: 'test',
    },
  };

  apps();
  http();
  middlewares();

};

function http() {
  exports.httpclient = {
    request: {
      timeout: 30000,
    },
  };
}

function middlewares() {

}

function apps() {

}

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/session/remove', controller.home.sessionRemove);
  router.get('/cookies', controller.home.cookies);
  router.get('/cookies/remove', controller.home.cookiesRemove);
  router.get('/news/list', controller.news.list);


  router.get('/user/login.html', controller.user.login);
  router.get('/user/profile', controller.user.profile);
  router.post('/user/login', controller.user.loginPost);
  router.get('/login', controller.login.index);

  const user = app.role.can('user');
  const admin = app.role.can('admin');
  router.get('/user', user, controller.user.index);
  router.get('/user.json', user, controller.user.jsonData);
  router.get('/admin', admin, controller.admin.index);

  router.get('/404.html', controller.error.error_404);
  router.redirect('/404', '/404.html', 302);
  router.get('/403.html', controller.error.error_403);
  router.redirect('/403', '/403.html', 302);
  router.get('/500.html', controller.error.error_500);
  router.redirect('/500', '/500.html', 302);
};

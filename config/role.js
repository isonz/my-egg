'use strict';

function delay(span) {
  return new Promise(resolve => {
    setTimeout(resolve, span);
  });
}

module.exports = app => {
  // app.role.use('admin', ctx => ctx.user && ctx.user.isAdmin);

  app.role.use('admin', async function(ctx) {
    await delay(2000); // fake query isAdmin
    return ctx.user && ctx.user.isAdmin;
  });

  app.role.use('can write', async ctx => {
    const post = await ctx.service.post.fetch(ctx.request.body.id);
    return ctx.user.name === post.author;
  });

  // eslint-disable-next-line no-unused-vars
  app.role.failureHandler = function(ctx, action) {
    // console.log(action);
    if (ctx.acceptJSON) {
      ctx.body = { target: '/403.html', stat: 'deny' };
    } else {
      ctx.realStatus = 200;
      ctx.redirect('/403.html');
    }
  };
};

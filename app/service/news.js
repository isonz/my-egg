'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // read config
    const { serverUrl, pageSize } = this.config.news;

    // use build-in http client to GET hacker-news api
    const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
      data: {
        orderBy: '"$key"',
        startAt: `"${pageSize * (page - 1)}"`,
        endAt: `"${pageSize * page - 1}"`,
      },
      dataType: 'json',
    });

    // parallel GET detail
    const newsList = await Promise.all(
      Object.keys(idList).map(key => {
        const url = `${serverUrl}/item/${idList[key]}.json`;
        // console.log(url);
        return this.ctx.curl(url, { dataType: 'json' });

        // {"title":"What: A terminal tool to check what is taking up your bandwidth","type":"story","url":"https://github.com/imsnif/what", "by":"PleaseHelpMe","descendants":30,"id":21911454,"kids":[21912229,21912134,21912223,21911733,21912026,21911760,21912195,21912071,21912095,21911954,21912069],"score":141,"time":1577690485}

      })
    );
    return newsList.map(res => res.data);
  }
}

module.exports = NewsService;

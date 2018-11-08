const proxy = require('express-http-proxy');

module.exports = {
  proxy: proxy('base-url-proxy' /* enter your base-url server */, {
    userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
      let data = JSON.parse(proxyResData.toString('utf8'));
      if(userReq.url === '' /* request url */) {
        // data to change
        
      }
      return JSON.stringify(data);
    }
})
}
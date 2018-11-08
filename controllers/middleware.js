
module.exports = {
  onRequest: (req, res, next) => {
    if(req.url === '' /* catch url */) {
      res.json({
        /* json to response */
      })
      return
    }
    next()
  },
  onSecondRequest: (req, res, next) => {
    if(req.url === '' /* catch second url */) {
      res.json({
        /* second json to send */
      })
      return
    }
    next()
  }
}
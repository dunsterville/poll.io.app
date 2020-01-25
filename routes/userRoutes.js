const { User } = require('../models')

module.exports = app => {
  app.post('./register', (req, res) => {
    const { email, username, } = req.body
    User
      .register(new User({ email, username }),
      req.body.password), e => {
        if(e) {
          console.error(e)
        }
        res.sendStatus(200)
      }
  })

  app.post('/login', (req, res) => {
    User.authenticate()(req.body.username, req.body.password, (e, user) => {
      if(e) {
        console.error(e)
      }
      res.json(user)
    })
  })
}
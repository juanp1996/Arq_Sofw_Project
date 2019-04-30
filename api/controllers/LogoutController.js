module.exports = {
  logout: async function (req, res) {
    delete req.session.user;
    res.redirect('/');
  }
  };

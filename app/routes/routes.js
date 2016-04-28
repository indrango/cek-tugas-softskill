var Data = require('../models/data');

module.exports = function(app) {

  // add data from /api/data
  app.route('/api/data')
    // get data
    .get(function(req, res) {
      Data.find(function(err, users) {
        if (err)
          res.send(err);

        res.json(users);
      });
    })

    // post data
    .post(function(req, res) {
      var data = new Data();
      data.judul = req.body.judul;
      data.nama = req.body.nama;

      // save data
      user.save(function(err, users) {
        if (err)
          res.send(err);

        res.json(users);
      });
    });
}

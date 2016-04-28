var Data = require('../models/data');

module.exports = function(app) {

  // add data from /api/data
  app.route('/api/data')
    // get data
    .get(function(req, res) {
      Data.find(function(err, datas) {
        if (err)
          res.send(err);

        res.json(datas);
      });
    })

    // post data
    .post(function(req, res) {
      var data = new Data();
      data.judul = req.body.judul;
      data.nama = req.body.nama;

      // save data
      data.save(function(err, datas) {
        if (err)
          res.send(err);

        res.json(datas);
      });
    })

    // data from /api/data/:user_id
    app.route('/api/data/:user_id')

    // delete data
    .delete(function(req, res) {
      Data.findByIdAndRemove({_id : req.params.user_id}, function(err, datas) {
        if (err)
          res.send(err)

        res.json(datas);
      });
    });
}

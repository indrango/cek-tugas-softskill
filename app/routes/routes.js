'use strict';
const Data = require('../models/data');

module.exports = function(app) {

  // add data from /api/data
  app.route('/api/data')
    // get data
    .get((req, res) => {
      Data.find((err, datas) => {
        if (err)
          res.send(err);

        res.json(datas);
      });
    })

    // post data
    .post((req, res) => {
      let data = new Data();
      data.judul = req.body.judul;
      data.nama = req.body.nama;

      // save data
      data.save((err, datas) => {
        if (err)
          res.send(err);

        res.json(datas);
      });
    })

    // data from /api/data/:user_id
    app.route('/api/data/:user_id')

    // delete data
    .delete((req, res) => {
      Data.findByIdAndRemove({_id : req.params.user_id}, (err, datas) => {
        if (err)
          res.send(err)

        res.json(datas);
      });
    });
}

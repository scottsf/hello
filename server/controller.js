module.exports = {
  registerUser: (req, res) => {
    const {username, password} = req.body;
    const db = req.app.get('db');
    db.registerUser([username, password]).then(instance => {
      res.status(200).send(instance);
    });
  },
  loginUser: (req, res) => {
    const {username, password} = req.body;
    const db = req.app.get('db');
    db.loginUser([username, password]).then(instance => {
      res.status(200).send(instance[0]);
    });
  },
  getPosts: (req, res) => {
    const {userposts, search} = req.query;
    const {id} = req.params;
    console.log(id, userposts, search);
    const db = req.app.get('db');
    db.getPosts([id, userposts, search]).then(instance => {
      res.status(200).send(instance);
    });
  },
};

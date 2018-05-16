let friend = require("../data/friends");

module.exports = function (app) { 
    app.get("../data/friends", function (req, res) {
        res.json(friend);
    });
    app.post("../data/friends", function (req, res) {
        friend.push(req.body);
    });

}

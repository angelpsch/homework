
var path = require("path");

module.exports = function(app) {
  // click route for 'continue' btn and 'new workout' btn
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
};

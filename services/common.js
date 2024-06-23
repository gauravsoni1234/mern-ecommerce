const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzdjODVkN2QxNDA3ZTMwMWViNmExMiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE5MTI2ODA4fQ.da1IkuVxQ6bnxZt2MXxOdXzXd1TgWLoTLmCorJzhkJ8";
  return token;
};

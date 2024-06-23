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
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzdkMGEyOTE2ODRjYjdjNmRjMDdiMyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE5MTI4MjQxfQ.3Y-ZfyhaP8WFmd34GIvWQFYO01UkKYlDt94GTlUcSBM";
  return token;
};

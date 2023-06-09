import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({
      success: false,
      token,
      message: "You're Not Authorize verify tokn",
    });
  }

  //if token is exist then verify the token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({
        success: false,

        message: "Token Is Invalid",
      }); 
    }
    req.user = user;
    next(); //Don't Forget To Call Next
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.role === "user") {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: "You're Not Authenticated verify use",
      });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(401).json({
        success: false,
        message: "You're Not Authorize verift admin",
      });
    }
  });
};

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email or username already exists",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully created user",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create user",
    });
  }
};

//user Login
export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });
    //user doesn't exit
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    //if user is exist then check the password or compare the password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    //if password is incorrectb
    if (!checkCorrectPassword) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Email Or Password",
      });
    }
    const { password, role, ...rest } = user._doc;
    console.log(user.role);

    //create jwt Token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );
    //set token in browser cookies and send response to the client
    res
      .cookie("accessToken", token, {
        expires: token.expiresIn,
        secure: true,
        httpOnly:true
      })
      .status(200)
      .json({
        success: true,
        token,
        role,
        message: "Successfully Login",
        
        data: { ...rest },
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed To Login",
    });
  }
};

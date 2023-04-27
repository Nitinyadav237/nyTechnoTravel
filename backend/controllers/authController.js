import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
// User registration
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

// User login
export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });
    // Check if user exists
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Compare user password
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // Incorrect password
    if (!checkCorrectPassword) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // Set token in cookie and send response to client
    res
      .cookie("accessToken", token, {
        expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
        secure: true,
        httpOnly: false,
      })
      .status(200)
      .json({
        success: true,
        message: "Successfully logged in",
        token,
        role: user.role,
        data: { ...user._doc, password: undefined },
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to login",
    });
  }
};

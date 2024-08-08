import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateJWT.js";

export const signup = async (req, res) => {
  // res.send("Register Here")
  try {
    const {
      fullName,
      email,
      password,
      confirmPassword,
      age,
      gender,
      profilePic,
    } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password doesn't match" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "Email already exists" });
    }

    //hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //https://avatar-placeholder.iran.liara.run
    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${email}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${email}`;

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      age,
      gender,
      profilePic:
        profilePic === " "
          ? gender === "male"
            ? maleProfilePic
            : femaleProfilePic
          : profilePic,
    });

    if (newUser) {
      console.log(newUser);
      //generatw JET token
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({
        error: "Invalid user data",
      });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

//LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    4;
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(
        password,
        user?.password || ""
      );
      if (isPasswordCorrect) {
        generateTokenAndSetCookie(user._id, res);
        res.status(201).json({
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
          profilePic: user.profilePic,
        });
      } else {
        res.status(500).json({
          error: "Password Incorrect",
        });
      }
    } else {
      res.status(500).json({
        error: "User doesn't exist",
      });
    }
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

//Log Out
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

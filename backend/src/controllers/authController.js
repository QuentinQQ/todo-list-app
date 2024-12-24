const admin = require("../services/firebase").admin;
const User = require("../models/userModel");

// Register
exports.registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {

    const userRecord = await admin.auth().createUser({ email, password });

    const user = await User.create({
      email: userRecord.email,
      firebaseUid: userRecord.uid,
    });

    res.status(201).json({ id: user._id, email: user.email });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Failed to register user." });
  }
};

// Login
exports.loginUser = async (req, res) => {
    const { idToken } = req.body;
    try {

      const decodedToken = await admin.auth().verifyIdToken(idToken);
  
      const user = await User.findOne({ firebaseUid: decodedToken.uid });
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }
  
      res.status(200).json({ message: "Login successful", userId: user._id });
    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(401).json({ error: "Invalid ID token." });
    }
  };

  exports.googleLogin = async (req, res) => {
    const { idToken } = req.body;
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      let user = await User.findOne({ firebaseUid: decodedToken.uid });
  
      if (!user) {
        user = await User.create({
          email: decodedToken.email,
          firebaseUid: decodedToken.uid,
        });
      }
  
      res.status(200).json({ message: "Google login successful", userId: user._id });
    } catch (error) {
      console.error("Error during Google login:", error);
      res.status(500).json({ error: "Google login failed." });
    }
  };
  

  
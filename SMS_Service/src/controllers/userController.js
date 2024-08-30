const User = require("../models/user");
const Twilio = require("twilio");
const otpHandler = require("../utility/otpHandler");

// Initialize Twilio client with credentials from environment variables
const twilioClient = new Twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// User signup handler
// This function handles the signup process for new users
const signup = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    // Create a new user instance with the provided data
    const user = new User({ name, email, phone, password });

    // Save the user to the database
    const savedUser = await user.save();

    // Check if the user was successfully saved
    if (!savedUser) {
      return res.status(400).json({ message: "Failed to save user" });
    }

    // Return a success response with the saved user data
    res
      .status(200)
      .json({ message: "User created successfully!", data: savedUser });
  } catch (error) {
    // Handle any errors during the signup process
    res.status(500).json({ message: "User not created!" });
    console.log(error);
  }
};

// Send OTP message handler
// This function sends a one-time password (OTP) to the user's mobile number
const sendOtpMessage = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Find the user by their email
    const user = await User.findOne({ email });

    // If user not found, return a 404 response
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    // Format the user's phone number with the country code (assumed to be India +91)
    const userPhone = `+91${user.phone}`;

    // Generate an OTP using the otpHandler utility
    const otp = otpHandler.generateOTP();
    console.log(otp); 

    // Send the OTP via SMS using Twilio
    await twilioClient.messages.create({
      body: `Your OTP is: ${otp}`,
      to: userPhone,
      from: process.env.TWILIO_NUMBER, // Twilio phone number
    });

    // Store the generated OTP in a temporary storage
    otpHandler.storeOTP(email, otp);

    // Return a success response indicating the OTP was sent
    res.status(200).json({ message: "OTP sent to mobile successfully!" });
  } catch (error) {
    // Handle any errors during the OTP sending process
    res.status(500).json({
      success: false,
      message: "OTP message not sent",
    });
    console.log(error);
  }
};

module.exports = {
  signup,
  sendOtpMessage,
};

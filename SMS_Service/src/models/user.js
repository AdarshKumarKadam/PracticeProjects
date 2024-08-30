const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone:{
    type:String,
    required:true
  }
  ,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
});

// Hash the password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) { 
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
  }
  next(); 
});

// Static method to find user by email
userSchema.statics.findByEmail=function(email){
  return this.findOne({email: email});
}

const User = mongoose.model("User", userSchema);

module.exports = User;

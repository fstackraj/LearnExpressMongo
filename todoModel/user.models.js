import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username."],
      unique: [true, "This username is already taken."],
      lowercase: [true, "Username must be in lowercase."],
    },
    email: {
      type: String,
      required: [true, "Please provide an email."],
      unique: [true, "This email is already taken."],
      lowercase: [true, "Email must be in lowercase."],
    },
    passwordHash: {
      type: String,
      required: [true, "Please provide a password."],
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", UserSchema);

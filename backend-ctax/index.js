import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import Data from "./models/Data.js";
import OnlineImport from "./models/OnlineImport.js";
import OfflineData from "./models/OfflineData.js";
import OfflineImport from "./models/OfflineImport.js";

import onlineRoute from "./routes/onlineRoute.js"; // Import routes
import onlineImpRoute from "./routes/onlineImpRoute.js"; // Import routes
import offlineRoute from "./routes/offlineRoute.js"; // Import routes
import offlineImpRoute from "./routes/offlineImpRoute.js"; // Import routes



dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", onlineRoute); // Register API routes
app.use("/api", onlineImpRoute); // Register API routes
app.use("/api", offlineRoute); // Register API routes
app.use("/api", offlineImpRoute); // Register API routes

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

app.post("/api/auth/register", async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ message: "User already exists!" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();
  
  res.json({ message: "Registration successful!" });
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found!" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid password!" });

  const token = jwt.sign({ userId: user._id }, "your_jwt_secret", { expiresIn: "1h" });
  res.json({ token });
});

app.listen(5000, () => console.log("Server running on port 5000"));

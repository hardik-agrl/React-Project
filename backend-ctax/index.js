import express from "express";
// import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// import auth from "./routes/auth.js"
// import onlineRoute from "./routes/onlineRoute.js"; // Import routes
// import onlineImpRoute from "./routes/onlineImpRoute.js"; // Import routes
// import offlineRoute from "./routes/offlineRoute.js"; // Import routes
// import offlineImpRoute from "./routes/offlineImpRoute.js"; // Import routes

import { connectDB } from "./db.js";

// import userRouter from './routes/userRouter.js'
import mssqlAuth from './mssql_routes/mssqlAuth.js'
import sqlOnlineRoute from './mssql_routes/sqlOnlineRoute.js'
import sqlOnlineImpRoute from './mssql_routes/sqlOnlineImpRoute.js'
import sqlOfflineRoute from './mssql_routes/sqlOfflineRoute.js'
import sqlOfflineImpRoute from './mssql_routes/sqlOfflineImpRoute.js'



dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// app.use("/api",userRouter)
app.use("/api",mssqlAuth)
app.use("/api",sqlOnlineRoute)
app.use("/api",sqlOnlineImpRoute)
app.use("/api",sqlOfflineRoute)
app.use("/api",sqlOfflineImpRoute)

// app.use("/api", auth); // Register API routes
// app.use("/api", onlineRoute); // Register API routes
// app.use("/api", onlineImpRoute); // Register API routes
// app.use("/api", offlineRoute); // Register API routes
// app.use("/api", offlineImpRoute); // Register API routes

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;


connectDB();



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

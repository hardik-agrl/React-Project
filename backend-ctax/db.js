import sql from "mssql";
import "msnodesqlv8";

import "dotenv/config"; // Correct way to use dotenv with ES Modules

const config = {
  server: String.raw`LAPTOP-2J54DEKI\\SQLEXPRESS`, // OR "LAPTOP-2J54DEKI\\SQLEXPRESS"
  database: "ctax",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
    parseJSON: true, // Fixes JSON parsing issues
  },
};

async function testConnection() {
  try {
    let pool = await sql.connect(config);
    console.log("✅ Successfully connected to SQL Server!");
    pool.close(); // Close connection after testing
  } catch (err) {
    console.error("❌ SQL Server connection failed:", err);
  }
}

testConnection();

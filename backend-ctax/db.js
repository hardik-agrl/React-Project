import sql from "mssql";

const config = {
  user: "hardik",
  password: "87654321",
  server: "localhost",
  database: "ctax",
  options: {
    encrypt: false,
    trustServerCertificate: true,
    requestTimeout: 30000, // Increase timeout (30 sec)
    enableArithAbort: true, // Fixes some disconnection issues
  },
};

// Global pool connection (only one instance)
let poolPromise;

const connectDB = async () => {
  if (!poolPromise) {
    poolPromise = new sql.ConnectionPool(config)
      .connect()
      .then((pool) => {
        console.log("✅ Connected to MSSQL - Connection Pool Ready");
        return pool;
      })
      .catch((err) => {
        console.error("❌ Database Connection Failed! Error:", err);
        process.exit(1); // Exit process on failure
      });
  }
  return poolPromise;
};

// Export the connection pool and sql module
export { connectDB, sql };

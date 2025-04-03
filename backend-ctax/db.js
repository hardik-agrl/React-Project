import sql from "mssql";

const config = {
  user: "sa",
  password: "12345678",
  server: "localhost",
  database: "Ctax_test",
  options: {
    encrypt: false,
    trustServerCertificate: true,
    requestTimeout: 30000, 
    enableArithAbort: true, 
  },
};


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
        process.exit(1); 
      });
  }
  return poolPromise;
};



export { connectDB, sql };

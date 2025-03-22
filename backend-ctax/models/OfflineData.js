import mongoose from "mongoose"

const OfflineDataSchema = new mongoose.Schema({
  companyName: String,
  lisenceKey: String,
  userId: String,
  password: String,
  balanceApi: String,
  
});

const OfflineData = mongoose.model('OfflineData', OfflineDataSchema);

export default OfflineData;
import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  clientId: String,
  clientSecret: String,
  username: String,
  password: String,
  organizationId: String,
  secretId: String,
  scope: String,
  accessTokenUrl: String,
  apiName: String,
  apiNameGlEntries: String,
  companyName: String,
  customerKey: String
});

const Data = mongoose.model('Data', dataSchema);

export default Data;

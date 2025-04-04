import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  client_id: String,
  client_secret: String,
  user_name: String,
  password: String,
  organization_id: String,
  secret_id: String,
  scope: String,
  access_token_url: String,
  api_name: String,
  api_name_gl_entries: String,
  company_name: String,
  customer_key: String
});

const OnlineData = mongoose.model('OnlineData', dataSchema);

export default OnlineData;

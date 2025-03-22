import mongoose from "mongoose";

const OfflineImportSchema = new mongoose.Schema({
    no: String,
    name: String,
    balance: String
})

const OfflineImport = mongoose.model('OfflineImport',OfflineImportSchema)

export default OfflineImport;
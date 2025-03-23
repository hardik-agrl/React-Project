import mongoose, { Mongoose } from "mongoose";

const OnlineImportSchema = new mongoose.Schema({
    glNo: String,
    glName: String,
    amount: String,
    debt: String,
    credit: String,
    accountType: String,
    amountCategory: String,
    date:String
    
});



const OnlineImport = mongoose.model('OnlineImport',OnlineImportSchema)

export default OnlineImport;
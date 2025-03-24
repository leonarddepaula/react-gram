const mongoose = require("mongoose");
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD;

const conn = async () => {
  try {
    const dbconn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@reactgram.ixjvm.mongodb.net/?retryWrites=true&w=majority&appName=ReactGram`
    );
    console.log('Conectou ao banco!');
    
    return dbconn
  } catch (error) {
    console.log(error);
    
  }
};

conn()

module.exports = conn

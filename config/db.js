
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://SamHawkz:rU5CVcNBmzedtR5p@cluster0.zijbz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log("DB initiated successfully");
  } catch (e) {
    console.error(e);
  }
};


module.exports = connectDB;
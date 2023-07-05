import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://Hema2320:Hema2320@cluster0.kag8j.mongodb.net/urlshortener');
    console.log("Database Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default dbConnect;

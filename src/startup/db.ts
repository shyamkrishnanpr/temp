import * as mongoose from "mongoose";

const connectDb = async () => {
  try {
    if (Bun.env.MONG_URI !== undefined) {
      const conn = await mongoose.connect(Bun.env.MONG_URI);
      console.log(`Mongodb connected on ${conn.connection.host} `);
    }
  } catch (error: any) {
    console.log(error);
  }
};

export default connectDb;

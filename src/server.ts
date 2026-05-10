import mongoose from "mongoose";
import app from "./app";
import config from "./config/config";


async function server() {
    // 3. Connect to MongoDB
   try{
     await mongoose.connect(config.DATABASE_URL as string);
    console.log('Connected to MongoDB Successfully');

    app.listen(config.PORT, () => {
        console.log(`Example app listening on PORT ${config.PORT}`)
    })
   }catch (err){
    console.log(err)
   }

}

server()
import { App } from './App.js';
import connectDB from './Db/database.js';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const portNumber = process.env.PORTNUMBER || 8000;

connectDB()
  .then((res) => {
    App.listen(portNumber, () => {
      console.log(`  Server is running at port ${portNumber}`);
    });

    // App.on((err) => {
    //   console.log(`ERROR RUNNING ON SERVER : ${err.message}`);
    // });
  })
  .catch((err) => {
    console.log(`MongoDb Connection Error !! : ${err.message}`);
  });

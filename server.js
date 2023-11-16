const express = require('express');
const dotenv = require('dotenv');
 dotenv.config( { path: "./config/.env"});
 const port = process.env.PORT || 5000
 const appRouter = require ("./routes/toRouter")
 const app = express();
 app.use (express.json());
 app.use("/todoApp" , appRouter);
 app.listen(port , () => {
    console.log(`this server from port ${port}`)
 })
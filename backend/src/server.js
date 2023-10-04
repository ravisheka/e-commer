const app  = require(".");
// const { connectDb } = require("./config/db");

const PORT=8484;
app.listen(PORT, ()=>{
    // await connectDb()
    console.log("ecommerce api listing on port: ",PORT);
})
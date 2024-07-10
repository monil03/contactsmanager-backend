const express = require("express");
const dotenv = require("dotenv").config()
const connectdb = require("./config/dbconnection")
const errorhandler = require("./middleware/errorhandler")
const port = process.env.PORT || 5000;

connectdb();
const app = express();

app.use(express.json());
app.use("/api/contacts", require("./routes/contactroutes")); //middleware
app.use("/api/users", require("./routes/userroutes")); //middleware
app.use(errorhandler);





app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});

// access express library
const express = require('express');
// create instance of express called app
const app = express();

app.listen(8000, function() {
    console.log("server is running");
})

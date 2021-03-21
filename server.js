// access express library
const express = require('express');
// create instance of express called app
const app = express();

// mock user data
const mockUserData=[
    {name: 'Mark'},
    {name: 'Jill'}
]


app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'successfully go users.',
        users: mockUserData
    })
})


// run app
app.listen(8000, function() {
    console.log("server is running");
})
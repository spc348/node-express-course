// access express library
const express = require('express');
// create instance of express called app
const app = express();

const bodyParser = require('body-parser');
//deprecated
app.use(bodyParser.json())

// mock user data
const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]

// get function
app.get('/users', function(req,res){
    res.json({
        success: true,
        message: 'successfully go users.',
        users: mockUserData
    })
})

// get function
app.get('/users/:id', function(req,res){
    console.log(req.params.id)
    res.json({
        success:true,
        message:'got one user',
        user: req.params.id
    })
})

// post function
app.post('/login', function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const mockUserName = "billy";
    const mockPassword = "secret";
    
    if(username === mockUserName && password === mockPassword){
        res.json({
            success:true,
            message: 'password and username correct',
            token: 'encrypted password'
        })
    } else {
        res.json({
            sucess: 'failure',
            messsage: 'hacker apprehended'
        })
    }
})

// run app
app.listen(8000, function() {
    console.log("server is running");
})
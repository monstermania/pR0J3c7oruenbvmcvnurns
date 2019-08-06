require('dotenv').config();

//require constant
const 
    express = require('express'),
    app = express(),
    PORT = process.env.PORT || 8000;



//connect to database
    require('./db/mongoose')

//Middileware

//Routes
    app.get('/', (req, res) => {
        res.json({ Success : true})
    });

    app.get('/api', (req, res) => {
        res.json({message : `API Root`})
    })
    

//Listening port

    app.listen(PORT, err =>{
        console.log(err || `Server listening on PORT ${PORT}`)
    });

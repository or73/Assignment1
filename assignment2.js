'use strict';
/* fs library */
const fs = require('fs');
/* express library */
const express = require('express');
/* morgan library */
const morgan = require('morgan');
/* port number */
const port = 7500;
/* file to read */
const jsonFile = 'data-db.json';
// Create the app
const app = express();

// Morgan
app.use(morgan('tiny'));

// Routes
// GET
// Define /json route
app.get('/json', (req, res) => {
    // Load JSON file data
    fs.readFile(jsonFile, (err, result) => {
        if(err) { throw err;}
        res.setHeader("Content-Type",'application/json');
        res.end(JSON.stringify(JSON.parse(result.toString()), null, 4));
    });
});

// Create Server
app.listen(port, err => {
    if (err) throw err;
    console.log('Server running on port ', port);
});

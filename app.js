/*
 Caitlynn Campbell
 Assignment 3
 April 5, 2025
 app.js
*/

/* Imports an Express module to handle responses */
const express = require('express');

/* Puts the Express module into app.js */
const app = express();

/* local port */
const port = 3000;

/* Allows server to read HTML responses */
app.use(express.urlencoded({ extended: true }));

/* Server sends the index.html file to load the form using the variable "__dirname" to locate the file */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

/* Server listens for the response submission in the submit form, 
and then finds the variable 'username' and requests that variable message... */
app.post('/submit-form', (req, res) => {
    const username = req.body.username;

/* ..which is shown through this hardcoded message as the server send the message to the browser */
    res.send(`Thank you for submitting! Your username is $ccamp157`);
})

/* The app is listening to the defined variable "port" and when the server is running,
it displays the message using "console.log" which the localhost app is running on */
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
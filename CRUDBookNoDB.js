// Description: CRUD Book No DB
// npm install express
// Run this file with node CRUDBookNoDB.js
// TEST with Postman
require("dotenv").config();
const express = require('express');
const app = express();

//parse incoming equests
app.use(express.json());

//sample data
let books = [ 
    {
        id: 1,
        title: 'Book 1',
        author: 'Author 1'
    },
    {
        id: 2,
        title: 'Book 2',
        author: 'Author 2'
    },
    {
        id: 3,
        title: 'Book 3',
        author: 'Author 3'
    }
]
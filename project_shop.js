const express = require('express');
const mongoose = require('mongoose');


let app = express();

//connect server to mongo server => local db //*****wrong in this step*****
/*mongoose.connect("mongodb://0.0.0.0:27017/users", (err)=> {
    if (!err) console.log('DB now is connected');
    else console.log(err)
}) */

async function connect(){
    let connection =  await mongoose.connect('mongodb://0.0.0.0:27017/shops');
    if (!connection) {
     console.log('noo')
    } else {
     console.log('good')
    }
 }
 connect()

//schema1
const shops1schema = new mongoose.Schema({
    user_name : String,
    password : String
});

//convert schema to model (class)
let shop1model = new mongoose.model("shop1" , shops1schema);

let newuser1 = new shop1model({
    user_name : "Ali",
    password : "123Ali"
}).save();


//schema2(create an email)
const shops2schema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    mobile_phone : String,          
    country : String,
    user_name : String,
    email : String,
    password : String
});

//convert schema to model (class)
let shop2model = new mongoose.model("shop2" , shops2schema);

let newuser2 = new shop2model({
    first_name : "Ali",
    last_name : "Abo alfotoh",
    mobile_phone : "01234567890",          
    country : "E.G.Y",
    user_name : "Ali",
    email : "Ali123@gmail.com",
    password : "123Ali"
}).save();




app.listen(3000 , function(){
    console.log('server now is opend')
})
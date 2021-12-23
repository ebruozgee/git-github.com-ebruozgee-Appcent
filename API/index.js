import express from 'express';
import bodyParser from 'body-parser';
import { pop } from 'core-js/core/array';

const app = express();
const port =3000;
app.use(bodyParser.json());
app.listen(port , () => {
    console.log("connected33333"); 
});
// const express = require("express");
// const server= express();
// server.get("/" , (req,res) =>{
//     res.send("express connected");
// } )
// const server = http.createServer((req,res) => {});
// server.listen(3000 , () => {
//     console.log("connected33333"); 
// });


const API_KEY = 'e5594e8b42419b59e585e4281dc05f9e';
const BASE_URL = 'https://api.themoviedb.org/3' ; 
const POP_URL = BASE_URL + '/discover/movie?language=tr-TR&sort_by=popularity.desc&' + API_KEY;
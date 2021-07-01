const express = require('express');//requerimos express
const app = express();//guardo en app express ejecutado
const path = require('path');//requiero path

app.use(express.static('public'));

app.listen(3030, ()=>{
    console.log('servidor levantado en el puerto 3030');
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/babbage.html'))
})
app.get('/berners-lee', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/berners-lee.html'))
})
app.get('/clarke', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/clarke.html'))
})
app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/hamilton.html'))
})
app.get('/hopper', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/hopper.html'))
})
app.get('/lovelace', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/lovelace.html'))
})
app.get('/turing', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/turing.html'))
})

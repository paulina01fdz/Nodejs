//import {sumar, restar} from './OperacionesEnteros/enteros';
const calculadora = require('./OperacionesEnteros/enteros.js');
const express = require('express');

const app = express ();

app.get ('/quieroSumar', (res, req) => {
    res.end ('<h2> La suma entre 5 y 3 </h2>' + calculadora.sumar(5, 3))
})

app.listen(8000 , ()=>{
    console.log('Ejecutando app')
})
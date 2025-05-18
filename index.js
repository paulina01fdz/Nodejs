//import {sumar, restar} from './OperacionesEnteros/enteros';
const calculadora = require('./OperacionesEnteros/enteros');
const express = require('express');

const app = express ();

app.get ('/quieroSumar', (res, req))

app.listen(8000 , ()=>{
    console.log('Ejecutando app')
})
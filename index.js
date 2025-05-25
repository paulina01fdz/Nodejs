//import {sumar, restar} from './OperacionesEnteros/enteros';
const calculadora = require('./OperacionesEnteros/enteros.js');
const express = require('express');
const inventario = require('./OperacionesObjetos/inventario.js');

const app = express ();

app.get('/quieroSumar', (res, req) => {
    res.end ('<h2> La suma entre 5 y 3 </h2>' + calculadora.sumar(5, 3))
});

app.get('/consultarInventario', (res, req) => {
    res.end ('<h2> Datos cargados </h2>' + inventario.cargarDatos())
});

app.get('/conectar', (req, res) => {
    console.log('Conexion')
});

const modeloUsuario = require('./models/usuario.models.js')

app.get('/insertarusuario', (req,res)=>{
    const nuevoUsuario = new modeloUsuario({
        nombre: 'Juanito',
        edad: 30,
        correo: 'juan.perez@ejemplo.com'
    });

    nuevoUsuario.save()
        .then(usuario => {
            console.log('Usuario creado:', usuario);
        })
        .catch(err => {
            console.error('Error al crear usuario:', err);
        });
});

app.get('/consultarusuario', (res,req) => {
    // Buscar usuarios
    modeloUsuario.find()
    .then(usuario => {
        console.log('Usuarios encontrados:', usuario);
    })
    .catch(err => {
        console.error('Error al buscar usuarios:', err);
    });

})

app.listen(8800 , ()=>{
    console.log('Ejecutando app')
})
//Importar la conexion
const mongoose = require('../config/connection');

//Creacion del esquema 
const esquemaUsuario = mongoose.Schema({
    nombre: String,
    edad: Number,
    correo: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

const Usuario = mongoose.model('usuario', esquemaUsuario);
module.exports = Usuario;
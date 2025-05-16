// Importando módulos necesarios
const express = require('express'); // Manejar el servidor
const mongoose = require('mongoose'); // Conectar con la base de datos MongoDB
const cors = require('cors'); // Aceptar peticiones
const jwt = require('jsonwebtoken'); // Autenticación con tokens JWT
const app = express(); // Crear la aplicación

app.use(cors()); // Permitir peticiones desde cualquier origen
app.use(express.json()); // Permitir manejo de JSON
// Conectar a la base de datos de MongoDB
mongoose.connect('mongodb+srv://Atlasadmin:Hola12345@editortextcluster.kc0gvhk.mongodb.net/EditorText', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conectado a MongoDB')) // Si se conecta bien
    .catch((err) => console.error('Error al conectar a MongoDB:', err)); // Si falla

// Modelos de MongoDB
// Modelo de usuario
const userSchema = new mongoose.Schema({
    nombre: String,
    correo: { type: String, unique: true, index: true }, // El correo debe ser único
    contrasena: String
});
const User = mongoose.model('User', userSchema);

// Modelo de notas
const noteSchema = new mongoose.Schema({
    usuarioId: String, // ID del usuario que creó la nota
    contenido: String // El contenido de la nota
});
const Note = mongoose.model('Note', noteSchema);


// Importando módulos necesarios
const express = require('express'); // Manejar el servidor
const mongoose = require('mongoose'); // Conectar con la base de datos MongoDB
const cors = require('cors'); // Aceptar peticiones
const jwt = require('jsonwebtoken'); // Autenticación con tokens JWT
const app = express(); // Crear la aplicación

app.use(cors()); // Permitir peticiones desde cualquier origen
app.use(express.json()); // Permitir manejo de JSON

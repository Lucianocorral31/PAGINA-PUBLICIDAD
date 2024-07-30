import dotenv from 'dotenv';
import connectDB from './src/lib/db.js';
import express from 'express';
import cors from 'cors';

// Cargar variables de entorno
dotenv.config();

const PORT = process.env.PORT || 4001;
const app = express();

// Conexión a la base de datos
connectDB();

// Middleware para procesar JSON en las solicitudes
app.use(express.json());

// Habilitar CORS (puedes personalizar las opciones según tu entorno)
app.use(cors());

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

  
  
  
  

  
const express = require('express');
const app = express();
const cors = require('cors'); // Importa o CORS
const tarefaRoutes = require('./routes/tarefaRoutes');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middlewares/authMiddleware');

// Middleware para JSON
app.use(express.json());

app.use(cors()); // Inicializa o CORS

// Rotas
app.use('/api', userRoutes); // Rota para autenticação

// Rotas protegidas
app.use('/api/tarefas', authMiddleware, tarefaRoutes);



module.exports = app;
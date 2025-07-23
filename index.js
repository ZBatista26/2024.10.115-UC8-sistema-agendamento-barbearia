const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { sequelize } = require('./src/config/configDb');
const authRoute = require('./src/modules/autenticacao/router/autenticacao.route')
const usuarioRoute = require('./src/modules/usuario/routes/usuario.route');
const agendamentoRou = require('./src/modules/agendamento/routes/agendamento.route');


dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());

app.use('/api/', usuarioRoute);
app.use('/api/', agendamentoRou);



// http://localhost:3001/api/login
// http://localhost:3001/api/logout
// http://localhost:3001/api/refresh-token
app.use('/api/', authRoute);

const PORTA = process.env.PORTA;
app.listen(PORTA, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        await sequelize.sync({ force: true, alter: true });
        console.log('Banco de dados sincronizado com sucesso.');
    } catch (err) {
        console.error('Erro ao conectar ou sincronizar o banco de dados:');
    }
    console.log(`Servidor rodando na porta ${PORTA}`);
});
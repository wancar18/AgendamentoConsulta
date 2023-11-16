const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/agendarConsulta', (req, res) => {
    const { nome, telefone, medico, data, hora } = req.body;
    const consulta = `${nome};${telefone};${medico};${data};${hora}\n`;

    fs.appendFile('consultas.csv', consulta, (err) => {
        if (err) throw err;
        console.log('Consulta agendada:', consulta);
        res.send('Consulta agendada com sucesso!');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

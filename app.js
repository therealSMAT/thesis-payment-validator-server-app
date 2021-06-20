const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 4000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ status: true, message: 'How did you get here?' });
});

app.post('/qr', (req, res) => {
    return res.json({ message: `User ID ${req.body.id} received` });
});

app.post('/test', (req, res) => {
    return res.json({ data: { tosin: 'Yes' } });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
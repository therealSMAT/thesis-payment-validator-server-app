const express = require('express');
const app = express();
const port = 4000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ status: true, message: 'How did you get here?' });
});

app.post('/qr', (req, res) => {
    res.json({ status: true, data: req.body });
});

app.post('/test', (req, res) => {
    res.json({ data: { tosin: 'Yes' } });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
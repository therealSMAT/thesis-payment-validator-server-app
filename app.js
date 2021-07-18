const express = require('express');

const app = express();
const port = 9000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ status: true, message: 'How did you get here?' });
});

app.post('/qr', (req, res) => {
    return res.json({ 
        message: `User ID ${req.body.id} received`,
        params: req.params,
        body: req.body,
        query: req.query
    });
});

app.post('/tigr/events', (req, res) => {
    console.log(req.body);
    return res.json(req.body);
});

app.post('/test', (req, res) => {
    return res.json({ data: { tosin: 'Yes' } });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
const express = require('express');
const app = express();
const port = 9080;


app.get('/', (req, res) => {
    res.send("Hey there!");
});

app.listen(port, () => {
    console.log(`Magica is happening on ${port}`);
});
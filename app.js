const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!! to AWS by YAJAI Pushing Code 2 time'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

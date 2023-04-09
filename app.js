const express = require('express');
const app = express();
const port = process.env.PORT || 2000;

app.get('/', (req, res) => {
    res.json({
        message: 'ok',
        name: 'nuong-cake'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})
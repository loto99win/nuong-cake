const express = require('express');
const app = express();
const port = process.env.PORT || 2000;

app.get('/', (req, res) => {
    res.json({
        message: 'ok',
        name: 'nuong-cake',
        love: 'Cục cưng của Bình',
        purpose: 'Bình Yêu Nương',
        company: 'Bình Nương'
    })
});

app.get('/data', (req, res) => {
    res.json({
        message: 'Nương đáng yêu quá'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({Hi: 'Buddy' });

});
const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log('You Are Listing to '+PORT);

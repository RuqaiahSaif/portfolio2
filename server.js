const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.listen(process.env.PORT || 3000);
app.use(express.static('public'));

console.log('Server running at http://127.0.0.1:3000');
app.get('/', (_, res) => {
    res.status(200).render('index', { title: 'portfolio' });
});
app.get('/index', (req, res) => {
    res.status(200).render('index', { title: 'portfolio' });
})


app.use((_, res) => {
    res.statusCode = 404;
    res.end('<h1> Sorry, page not found</h1>');
});

// var port = process.env.PORT || 5001
// app.listen(port, () => {
//     console.log('Server running at http://127.0.0.1:5001');
// })
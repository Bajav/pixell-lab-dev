const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(express.static('public'));

app.get ('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
});
app.get ('/pages/why-us', (req, res)=>{
    res.sendFile(__dirname + 'pages/why-us.html')
});
app.listen(port,()=>{
    console.log('server running on port ${port}')
});
const express = require('express');
const app = express();
const port = 5000;

app.set('view engine','ejs');
app.use(express.static('public'));

app.get ('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
});
app.get ('/why-us', (req, res)=>{
    res.sendFile(__dirname + '/why-us.html')
});
app.listen(port,()=>{
    console.log('server running on port ${port}')
});
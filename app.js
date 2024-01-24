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
app.get ('/services', (req, res)=>{
    res.sendFile(__dirname + '/services.html')
});
app.get ('/past-projects', (req, res)=>{
    res.sendFile(__dirname + '/past-projects.html')
});
app.get ('/pricing', (req, res)=>{
    res.sendFile(__dirname + '/pricing.html')
});
app.get ('/contact', (req, res)=>{
    res.sendFile(__dirname + '/contact.html')
});
app.get ('/index', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
});
app.listen(port,()=>{
    console.log('server running on port ${port}')
});
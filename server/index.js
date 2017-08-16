const express = require('express');
const bodyParser = require('body-parser')

let app = express();
app.use(bodyParser.json())


let port = 3000;

app.listen(port, () =>{
    console.log('Server listening on port ' + port)
})
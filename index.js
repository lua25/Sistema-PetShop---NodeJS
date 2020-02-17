const http = require('http')
const petshop = require('./petshop')
const server = http.createServer((req, res) =>{

    if(req.url == '/listapets'){
        
            let resultado = petshop.listarPets();
            return res.end(resultado)
        
    }

    res.setHeader("Content-Type","text/html;charset=utf-8")
    res.end("Você está no sistema do PetShop.")
})
server.listen(8000, "localhost")
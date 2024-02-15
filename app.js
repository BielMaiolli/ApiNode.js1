const express = require("express")

const app = express()



app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/boasVindas.html")
    
})


app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
})


app.get('/Ola/:cargo/:nome', function(req,res){
    res.send("<h1>Ola "+req.params.nome+"</h1><br>"+"<h2>Seu cargo e: "+req.params.cargo+"</h2>")
    //só da pra enviar um send 1 vez dentro da função de rotas
})



app.listen(8081, function(){console.log("servidor rodando na url http://localhost:8081/")});



const express = require("express")

const app = express()

//definir una ruta de ejemplo
//app.get(direccion,requerimiento y peticion)
app.get("/",(req,res)=>{
    res.send("hola gato")
})

app.get("/producto",(req,res)=>{
    res.send("hola estoy en la pagina de productos")
})

app.get("/contacto",(req,res)=>{
    res.send("hola estoy en la pagina de contacto")
})
//req contiene informacion sobre la url
// res respuesta representa la respuesta que el servidor le envia de vuelta al cliente
//como resultado de una solicitud 
app.listen(4001)

console.log("servidor ejecutandose")
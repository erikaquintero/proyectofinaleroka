export async function generartoken(){

const cliente_id= "client_id=6c20d7cfdd924aa5bdd270b2d92a794d"
const cliente_secret="client_secret="
const grand_type="grant_type=client_credentials"

let dataEnvio=grant_type+"&"client_secret+"&"+client_id

const URL="https://accounts.spotify.com/api/token"

const PETICION={
    method:"POST"
    headers:{"content-type":"x-ww-from-urlencoded"},
    body:dataEnvio
}

let respuesta=await fetch(URL,PETICION)

let token=await respuesta.json()

console.log(token)



}
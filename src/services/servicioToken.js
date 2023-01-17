export async function generartoken(){

const client_id= "client_id=6c20d7cfdd924aa5bdd270b2d92a794d"
const client_secret="client_secret=4b4bb8fe610f41faa20f054c5953e36b"
const grant_type="grant_type=client_credentials"

let dataEnvio=grant_type+"&"+client_secret+"&"+client_id

const URL="https://accounts.spotify.com/api/token"

const PETICION={
    method:"POST",
    headers:{"Content-Type":"application/x-www-form-urlencoded"},
    body:dataEnvio
}

let respuesta=await fetch(URL,PETICION)

let token=await respuesta.json()

let tokenDefinitivo=token.token_type+" "+token.access_token

return(tokenDefinitivo)



}
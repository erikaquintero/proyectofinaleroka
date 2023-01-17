//RECETA PARA CONSUMIR UN API EN REACT

import { Await } from "react-router-dom"

import { generartoken } from "./servicioToken.js"

export async function servicioCancionesTop(){

    generartoken()

    //1.pa donde vas ya que vas 
    //escribir la url del servicio del api
    const URL = "https://api.spotify.com/v1/artists/7okwEbXzyT2VffBmyQBWLz/top-tracks?market=US"

    //2. QUE OPERACION VAS HACER EN LA BASE DE DATOS
    // CONFIGURAR LA PETICION DE ENVIO HACIA EL SERVIDOR
    const PETICION = {
        method: "GET",
        headers:{Authorization:"  Bearer BQDD84WxFMn_4Un_END6u87MyyQcyBpmE3_OzytsLdG5bdwzH84j5AR5884uQ_LrdbPdmSts-Y4glELzfyBRM5AyuvJJ5BbzdGPXQkd6WgZZbYGArBbdfL9S3LdzjeuQ5GK5qOqyU-iqex-qNUSgN3yZgqsQ9Q_KmtIhMXAbV614"}
    }

    //30 nos vamos para el restaurante
    //CONSUMIMOS EL API
    let respuesta=await fetch(URL,PETICION)
    let canciones=await respuesta.json()

   return(canciones)

}
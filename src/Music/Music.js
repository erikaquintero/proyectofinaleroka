import { servicioCancionesTop } from "../services/servicioCanciones"
import { useState,useEffect } from "react"
import './Musica.css'
export function Music(){
    //aca estamos usando el hook state para almacenar la respuesta del api de forma global
    const [canciones,setCanciones] = useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)
    //usando el hook useeffect  para limitar el consumo del api a una sola vez
    useEffect(function(){
        servicioCancionesTop().then(function(respuesta){
            setCanciones(respuesta)
            setEstadoCarga(false)
        })
    },[])

    //render del componente
    if(estadoCarga == true){
        return(
            <>
                <h2>estamos cargando las canciones</h2>
            </>
        )

    }else{
        
        return(
            <>
                <h2>canciones de la banda: </h2>
                {
                    canciones.tracks.map(function(cancion){
                        return(


                            <div className="carta shadow">
                            <h1 className="text-center">{cancion.name}</h1>
                            <img className="fotos img-fluid w-100 h-50" src={cancion.album.images[0].url}></img>
                            <audio controls src={cancion.preview_url} className="mt-3"></audio>
                            <h2>POPULARIDAD:{cancion.popularity}</h2>
                            </div>
                        )
                    })
                }
            </>
        )

        

    }

}
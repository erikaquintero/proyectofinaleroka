import './Home.css'
import { Footer } from '../shared/Footer/Footer'

export function Home(){
    return(
        <>
        <section>
            <div className="banner">
               
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                    
                    <div className="col-12 col-md-8">
                    <h2 className="titulo_home">MANA</h2>
                        <p>“Miami, FL - 2 de septiembre de 2021.- Telemundo y Billboard anunciaron hoy que la internacionalmente reconocida banda mexicana de rock en español, Maná, será honrada con el premio Billboard ĺcono que le será otorgado en los Premios Billboard de la Música Latina 2021.

                        </p>

                        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-f0929.appspot.com/o/banner%20mana.png?alt=media&token=51f36e78-42d9-4dd5-be89-a3498fbe82c4" alt="" className="img-fluid w-100" />
                    </div>
                    
                    <div className="col-12 col-md-4 tarjeta ">
                   
                        <div className="row">
                    
                             <div className= "col-3 col-md-4">
      
                                <i className="bi bi-music-note-list fs-1"></i>
                            
                            </div>
                        <div className= "col-3 col-md-4 mt-2">
      
                            <p>lorem10</p>
                    </div>
                    
                    
                </div>

                <div className="row">
                    
                    <div className= "col-3 col-md-4 mt-2">

                       <i className="bi bi-music-note-list fs-1"></i>
                   
                   </div>
               <div className= "col-3 col-md-4 mt-2 text-center">

                        <p>25 DIC</p>
                        <p>25 DIC</p>
                   
           </div>
           
           
       </div>

       <div className="row">
                    
                    <div className= "col-3 col-md-4 mt-2">

                       <i className="bi bi-music-note-list fs-1"></i>
                   
                   </div>
               <div className= "col-3 col-md-4 mt-2 ">

                   <p>lorem10</p>
           </div>
           
           
       </div>

       <div className="row">
                    
                    <div className= "col-3 col-md-4 mt-2">

                       <i className="bi bi-music-note-list fs-1"></i>
                   
                   </div>
               <div className= "col-3 col-md-4 mt-2">

                   <p>lorem10</p>
           </div>
           
           
       </div>

            </div>

         </div>

    </div>
        </section>

        <section>
        <div className="container-fluid mt-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="titulo_home">NOTICIAS</h1>
                    <hr/>
                </div>
            </div>
            <div className= "row">
            <div className="col-12 col-md-4">
                <img src='https://firebasestorage.googleapis.com/v0/b/spotify-f0929.appspot.com/o/noticia%201.jpg?alt=media&token=b8718d4a-5d08-416d-a326-28695076fbff' alt='' className="img-fluid w-100"/>
                <p className="text-center mt-2">
                Sergio Vallín, guitarrista de Maná, combina su saber de vieja escuela con una nueva tecnología para explorar matices sonoros en Microsinfonías. Lo acompaña un elenco diverso que va desde Carlos Santana hasta la Orquesta Sinfónica de Praga..
                </p>
           
            </div>

            <div className="col-12 col-md-4 mt-2">
                <img src='https://firebasestorage.googleapis.com/v0/b/spotify-f0929.appspot.com/o/noticia3.jpg?alt=media&token=1131c833-b569-4356-8a8b-d86d44f3caff' alt='' className="img-fluid w-100"/>
                <p className="text-center">
                La banda mexicana comenzará su gira en Los Ángeles el 10 de febrero de 2023, luego pasará por San José, Houston, Miami, Nueva York, Chicago, entre otras ciudades, para cerrar el 23 de septiembre en Sacramento.
                </p>
            </div>

            <div className="col-12 col-md-4">
                <img src='https://firebasestorage.googleapis.com/v0/b/spotify-f0929.appspot.com/o/noticia%202.png?alt=media&token=9e63a579-4b73-48d4-8945-ca2e86f28d05' alt='' className="img-fluid w-100"/>
                <p className="text-center mt-2">
                El martes en la noche, durante casi hora y media, Fher Olvera y los integrantes de Maná, deleitaron con sus mejores éxitos a los invitados que llegaron a la piscina del hotel en Las Vegas, durante la semana en que se entregarán los Latin GRAMMY.
                La agrupación, que tuvo el reconocimiento en 2018 de parte de la Academia Latina de Artes y Ciencias de la Grabación como ‘Persona del Año’, calentó la fría noche en la ciudad que nunca duerme, junto a unos tragos de tequila y canciones como ‘De Pies a Cabeza’, ‘Rayando El Sol’ y ‘Clavado en un Bar, que los cerca de 300 invitados cantaron a todo pulmón, a pesar de no estar en el clima ideal para un concierto de Maná, algo que no importó porque se trataba de la icónica banda.
                </p>
            </div>
            </div>
            </div>

        
        </section>
        <Footer/>
        
        </>
    )
}
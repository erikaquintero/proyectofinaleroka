import { Footer } from "../shared/Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./Mercancia.css";

export function Mercancia() {
  //ACTIVAMOS LA NAVEGACION ENTRE COMPONENTES CUANDO SE DE UN EVENTO
  let navegacion=useNavigate()
    //que hago cuando se de el evento...
  function detectarEvento(productoSeleccionado) {
    navegacion("/tienda",{
      state:{productoSeleccionado}
    })

  }

  let titulo = "Productos de la banda...";
  let productos = [
    {
      nombre: "buso original",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotify-f0929.appspot.com/o/buso%20mana.jpg?alt=media&token=c6992d6c-35d5-4e43-896f-116072bda84d",
      precio: 400000,
      descripcion:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojaslas cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    },
    {
      nombre: "playera dama",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotify-f0929.appspot.com/o/Playera%20roker%20dama.jpg?alt=media&token=268bbe58-8273-4907-a577-1f2123e8b003",
      precio: 200000,
      descripcion:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojaslas cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    },
    {
      nombre: "gorra",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotify-f0929.appspot.com/o/gorra%20mana.jpg?alt=media&token=fa441c2d-948f-48e0-8f57-066fec6dd2b7",
      precio: 150000,
      descripcion:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojaslas cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    },
    {
      nombre: "playera hombre",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotify-f0929.appspot.com/o/Playera%20mana.jpg?alt=media&token=1b656cca-d2a7-449c-8876-14d44cd314d6",
      precio: 300000,
      descripcion:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojaslas cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."

    },
    {
      nombre: "poster",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotify-f0929.appspot.com/o/poster%20mana.jpg?alt=media&token=34bbd889-425a-4959-aa37-ae07677be9b1",
      precio: 100000,
      descripcion:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojaslas cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    },
    {
      nombre: "camibuso",
      foto: "https://firebasestorage.googleapis.com/v0/b/spotify-f0929.appspot.com/o/Camibuso%20mana.jpg?alt=media&token=48d584fd-620b-4157-97ae-5e9412d9f994",
      precio: 200000,
      descripcion:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojaslas cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
    },
  ];

  return (
    <>
      <h1 className="titulo_mercancia">{titulo}</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-5">
          {productos.map(function (producto, id) {
            return (
              <div key={id}>
                <div className="col">
                  <div className="card h-100 shadow">
                    <img
                      src={producto.foto}
                      alt="foto"
                      className="h-100 img-fluid w-100"
                    />

                    <button className="btn btn-primary mx-5 my-3" onClick={
                        function(){
                            detectarEvento(producto)
                        }
                    }>
                      AMPLIAR
                    </button>
                    <h1 className="text-center">{producto.nombre}</h1>
                    <h2 className="text-center">{"$" + producto.precio}</h2>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

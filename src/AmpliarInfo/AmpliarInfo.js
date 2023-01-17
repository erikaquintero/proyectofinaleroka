import { useLocation } from "react-router-dom";
import "./AmpliarInfo.css";

export function AmpliarInfo() {
  let recepcionDatos = useLocation();

  let producto = recepcionDatos.state.productoSeleccionado;
  console.log(producto);
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-12 col-md-5 ">
            <img src={producto.foto} alt="foto" className="img-fluid w-100" />
          </div>
          <div className="col-12 col-md-4 border p-3 ">
            <h2 className="fw-bold">{producto.nombre}</h2>
            <h1 className="mt-3 display-1">
              {"$" + producto.precio}
              <span className="descuento">20% off</span>
            </h1>
            <br />
            <span className="badge text-bg-primary">Descuento del Dia</span>
            <p>Hasta 48 cuotas</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/spotydqq.appspot.com/o/american-express.png?alt=media&token=f2884aee-74be-4656-884a-48dc21517a6f"
              alt=""
              className="img-fluid"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/spotydqq.appspot.com/o/visa.png?alt=media&token=e91f13fb-7b44-456f-9a56-bfa6b78c1fd0"
              alt=""
              className="img-fluid ms-2"
            />

            <br />
            <br />

            <i className="bi bi-truck mt-3 fs-1 text-success"></i>
            <p className="text-success fw-bold">
              Envio gratis a nivel nacional
            </p>
            <p>Conoce los tiempos y las formas de envio</p>

            <i class="bi bi-arrow-clockwise fs-1 mt-3 text-success"></i>
            <p className="text-success fw-bold">Devolucion gratis</p>
            <p>30dias para reembolso</p>
            <p className="fw-bold">{producto.descripcion} </p>
          </div>
        </div>
      </div>
    </>
  );
}

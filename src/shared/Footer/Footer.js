
import './Footer.css'
export  function Footer(){
    return(
        <footer>
            <div className = "container-fluid">
                <div className="row p-5 pie">
                    <div className="col-12 col-md-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-f0929.appspot.com/o/logo%20mana.jpg?alt=media&token=9f3b9e25-f815-4825-9472-31d6f5b05ac1" alt="" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                            <h2 className="fw-bold">SOBRE LA BANDA</h2>
                            <h4>BANDA MANA</h4>
                            <br/>
                            <h2 className="fw-bold">SOBRE LA BANDA</h2>
                            <h4>BANDA MANA</h4>
                    </div>
                    <div className="col-12 col-md-4">
                            <i className="bi bi-instagram fuente me-3"></i>
                            <i className="bi bi-tiktok fuente me-3"></i>
                            <i className="bi bi-facebook fuente me-3"></i>
                            <i className="bi bi-youtube fuente"></i>
                    </div>
                    
                </div>

            </div>
        </footer>
    )

}
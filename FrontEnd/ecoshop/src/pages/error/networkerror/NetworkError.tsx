import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const NetworkError = () => {
    
    return(
        <section className="section-home">
            <div className="section-home-ecoshop">
                <h2 className="home-h2">
                    <span className="home-span">
                        503 - Service Unavailable
                    </span>
                </h2>
                <p className="home-p2">
                    Desculpe, o servidor não está disponível no momento, verifique sua conexão com a internet e tente novamente!
                </p>
                <div className="home-box-button">
                    <Link to='/home'>
                        <Button variant="outlined" className="button-sm">Voltar</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
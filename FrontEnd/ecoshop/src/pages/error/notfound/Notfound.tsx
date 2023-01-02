import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    
    return (
        <section className="section-home">
            <div className="section-home-ecoshop">
                <h2 className="home-h2">
                    <span className="home-span">
                        404 - Page Not Found
                    </span>
                </h2>
                <p className="home-p2">
                    Desculpe, mas a página requisitada não foi encontrada!
                </p>
                <div className="home-box-button">
                    <Link to='/home'>
                        <Button variant="outlined" className="button-sm">Voltar</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
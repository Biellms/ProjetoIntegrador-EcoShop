import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReduce';
import './Sobre.css';

export const Sobre = () => {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate()

    useEffect(() => {
        if (token === "") {
            navigate("/home")
        }
    }, [token])

    return (
        <>
            <section className='sobre-container'>

                <div className="objetivos">
                    <h1>EM DESENVOLVIMENTO 🖥️</h1>
                </div>

            </section>
        </>
    );
}
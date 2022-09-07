import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Login.css';
import UserLogin from '../../models/UserLogin';
import { login } from '../../service/Service';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';


/* const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#70A25C',
    },
    '& .MuiFormLabel-root': {
        color: '#70A25C',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'black',
    },
    '& .MuiInputBase-input': {
        color: '#70A25C',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'green',
        },
        '&:hover fieldset': {
            borderColor: '#70A25C',
            boxShadow: '2px 2px 2px #70A25C',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'black',
            boxShadow: '2px 2px 2px black',
        },
    },
}); */

function Login() {

    let history = useHistory();
    const dispatch = useDispatch()
    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            history.push('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login('/usuarios/logar', userLogin, setToken)
            Swal.fire({
                icon: 'success',
                title: 'Boaaa...',
                text: 'Usuário e senhas corretos!',
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Seja bem vindo!',
            })
        } catch (error) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Dados inconsistentes. Favor verificar as informações de login!',
                showCloseButton: true,
                focusConfirm: true,
                confirmButtonText:
                    '<i class="fa fa-thumbs-up"></i> Tentar novamente!',
            })
        }
    }

    return (
        <html lang="pt-bt">
            <head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Login</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
                    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
                    crossOrigin="anonymous"
                />
                <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                ></script>
                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                ></script>
                <script src="sweetalert2.min.js"></script>
                <link rel="stylesheet" href="sweetalert2.min.css"></link>
            </head>
            <body>
                <Container fluid>
                    <Row>
                        <Col md={5} className='primeira-coluna'>
                            <div className='informacoes-cadastro'>
                                <h1>Logue-se e navege !</h1>
                                <p>Se não tiver um login, por favor faça o cadastro</p>

                                <div className='espacamento'>
                                    <Link to='/cadastro'> <Button className='botao-cadastro' variant="outline-light">Cadastro</Button> </Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={7} className='segunda-coluna'>
                            <div>
                                <Form onSubmit={onSubmit} className='formulario'>

                                    <div className='teste'>
                                        <h1 className='titulo-principal'> Entre com a sua conta</h1>
                                        <div className='espacamento-coluna'>
                                            <Form.Group className="mb-3" controlId="formBasicText">
                                                <Form.Label className='texto-formulario' id='usuario'>Seu usuário</Form.Label>
                                                <Form.Control className='texto-input' name='usuario' id='usuario' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} type="text" placeholder="Digite o usuário cadastrado:" />
                                                <div className='texto-formulario2'>
                                                    <Form.Text className="color">
                                                        Digite o usuário corretamente, para não ter erros!
                                                    </Form.Text>
                                                </div>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className='texto-formulario'>Sua senha</Form.Label>
                                                <Form.Control id='senha' className='texto-input'  name='senha' value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} type="password" placeholder="Digite a senha cadastrada:" />
                                                <div className='texto-formulario2'>
                                                    <Form.Text className="color">
                                                        Digite a senha corretamente, para não ter erros!
                                                    </Form.Text>
                                                </div>
                                            </Form.Group>
                                            <div className='alinhamento-botao'>
                                                <Button className='botao' variant="primary" type="submit">
                                                    Logar
                                                </Button>
                                            </div>
                                        </div>

                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </body>
        </html >
    );
}

export default Login;
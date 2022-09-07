import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField,  styled, Paper } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import './Cadastro.css';
import User from '../../models/User';
import { cadastroUsuario } from '../../service/Service';
import { toast } from 'react-toastify';
import Checkbox from '@mui/material/Checkbox';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CssTextField = styled(TextField)({
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
            boxShadow: '2px 2px black',
        },
    },
});

function Cadastro() {

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>('')
    const [user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: ''
    })

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: ''
    })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push('/login')
        }
    }, [userResult])

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuário cadastrado com sucesso!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        } else {
            toast.error('Dados inconsistentes. Favor verificar as informações de cadastro!', {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
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
                                            <Form.Control className='texto-input' name='usuario' id='usuario' type="text" placeholder="Digite o usuário cadastrado:" />
                                            <div className='texto-formulario2'>
                                                <Form.Text className="color">
                                                    Digite o usuário corretamente, para não ter erros!
                                                </Form.Text>
                                            </div>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label className='texto-formulario'>Sua senha</Form.Label>
                                            <Form.Control id='senha' className='texto-input'  name='senha'  type="password" placeholder="Digite a senha cadastrada:" />
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

export default Cadastro;
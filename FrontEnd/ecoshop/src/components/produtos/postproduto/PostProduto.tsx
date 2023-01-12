import './PostProduto.css'
import { TextField, Paper, Button, styled, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { useState, useEffect, ChangeEvent, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { TokenState } from '../../../store/tokens/tokensReduce';
import { useSelector } from 'react-redux';
import User from '../../../models/User';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../service/Service';
import { ToastError, ToastSuccess, ToastWarn } from '../../styles/toast/Toasts';
import axios from 'axios';
import { UtilContext } from '../../../context/utilcontext/UtilContext';
import { Link } from 'react-router-dom';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#97C160',
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: '#97C160',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#97C160',
        },
    },
});

interface propsPostProduto {
    idProduto: number
}

export const PostProduto = (propsPostProduto: propsPostProduto) => {

    const { idProduto } = propsPostProduto
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const { openBackDrop, closeBackDrop, respApiValue, modalValue } = useContext(UtilContext)
    let navigate = useNavigate();

    const idUser = useSelector<TokenState, TokenState["ids"]>(
        (state) => state.ids
    )
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [user, setUser] = useState<User>({
        id: idUser,
        nome: '',
        usuario: '',
        senha: ''
    })

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nomeCategoria: '',
        descricao: ''
    })

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nomeProduto: '',
        descricao: '',
        preco: 0,
        imagem: '',
        categoria: null,
        usuario: user
    })

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    async function getCategorias() {
        try {
            openBackDrop()
            busca('/categorias', setCategorias, {
                headers: { 'Authorization': token }
            })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (!error?.response) {
                    navigate('/error')
                }

                ToastError(error.message)
            }
        }
        closeBackDrop()
    }

    async function findByIdProduto(id: number) {
        try {
            await buscaId(`produtos/${id}`, setProduto, {
                headers: { 'Authorization': token }
            })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (!error?.response) {
                    navigate('/error')
                }
            }
        }
    }

    useEffect(() => {
        getCategorias()
        if (idProduto !== 0) {
            findByIdProduto(idProduto)
        }
    }, [idProduto])

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (validaCampos()) {
            try {
                openBackDrop()
                modalValue()

                if (idProduto === 0) {
                    await post(`/produtos`, produto, setProduto, {
                        headers: { 'Authorization': token }
                    })

                    respApiValue(1)
                    ToastSuccess('Produto cadastrado com sucesso!')
                } else {
                    await put(`/produtos`, produto, setProduto, {
                        headers: { 'Authorization': token }
                    })

                    respApiValue(1)
                    ToastSuccess('Produto Atualizado com sucesso!')
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (!error?.response) {
                        navigate('/error')
                    }

                    ToastError(error.message)
                }
            }
        }

        closeBackDrop()
    }

    // VALIDAR CAMPOS
    const validaCampos = () => {
        let msg = 'Preencha o campo: '
        let blankField = false

        if (produto.nomeProduto === '') {
            blankField = true
            msg += ' "Nome do Produto" '
        }
        if (produto.descricao === '') {
            blankField = true
            msg += ' "Descrição do Produto" ' }
        if (produto.categoria?.id === 0) {
            blankField = true
            msg += ' "Categoria" '
        }
        if (produto.preco < 1) {
            blankField = true
            ToastWarn('O preço deve ser maior que 0')
        }

        if (blankField) {
            ToastWarn(msg)
            return false   
        }

        return true
    }

    return (
        <Paper elevation={12} className='post-card'>
            <div className='post-card-logo'>
                <h3>
                    <span className='ecoshop-header-eco'>ECO</span>
                    <span className='ecoshop-header-shop'>SHOP</span>
                    <img src="./img/logoEcoshop.png" alt="" />
                </h3>
            </div>
            <div className='post-card-info'>
                <h3>Preencha os campos</h3>
            </div>
            <form onSubmit={onSubmit} className='post-card-form'>

                <div className='post-card-form-input'>
                    <CssTextField id='nomeProduto' label='Nome do Produto' variant='outlined' name='nomeProduto' fullWidth
                        value={produto.nomeProduto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} />
                    <CssTextField id='descricao' label='Descrição do Produto' variant='outlined' name='descricao' fullWidth
                        value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} />
                    <CssTextField id='preco' label='Preço' variant='outlined' name='preco' fullWidth
                        value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} />
                    <CssTextField id='imagem' label='URL da Imagem' variant='outlined' name='imagem' fullWidth
                        value={produto.imagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} />
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="input-categoria-label">Categoria</InputLabel>
                        <Select labelId="input-categoria-label" id="input-categoria"
                            onChange={(e) => buscaId(`/categorias/${e.target.value}`, setCategoria, {
                                headers: { 'Authorization': token }
                            })}>
                            {
                                categorias.map(categoria => (
                                    <MenuItem value={categoria.id}>{categoria.nomeCategoria}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </div>
                <div className='post-card-form-button'>
                    <Button className='button-post' type='submit' variant="contained" size='small'>
                        Confirmar
                    </Button>
                    <Button variant="outlined" size='small' onClick={() => modalValue()}>
                        Cancelar
                    </Button>
                </div>
            </form>
        </Paper>
    );
}
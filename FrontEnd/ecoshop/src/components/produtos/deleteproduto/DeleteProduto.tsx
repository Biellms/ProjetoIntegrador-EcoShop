import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import './DeleteProduto.css'
import { useNavigate, useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Produto from '../../../models/Produto';
import { TokenState } from '../../../store/tokens/tokensReduce';
import { buscaId, deleteId } from '../../../service/Service';
import { CartContext } from '../../../context/CartContext';
import axios from 'axios';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const DeleteProduto = () => {

    const [open, setOpen] = useState(false);
    const [deletado, setDeletado] = useState(false)
    const [post, setPosts] = useState<Produto>()

    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDeletado(true)
    };

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    useEffect(() => {
        if(deletado) {
            navigate('/venderResp')
        }
    })

    async function findById(id: string) {
        try {
            openBackDrop()
            buscaId(`/produtos/${id}`, setPosts, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (!error?.response) {
                    navigate('/error')
                }
            }
        }

        closeBackDrop()
    }

    function sim() {
        try {
            openBackDrop()
            deleteId(`/produtos/${id}`, {
                headers: {
                    'Authorization': token
                }
            });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (!error?.response) {
                    navigate('/error')
                }
            }
        }

        handleClose()
        setDeletado(true)
        closeBackDrop()
    }

    // BACKDROP
    const { openBackDrop, closeBackDrop } = useContext(CartContext)

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Deletar
            </Button>
            <Dialog open={open} TransitionComponent={Transition} aria-describedby="alert-dialog-slide-description"
                onClose={handleClose} keepMounted
            >
                <DialogTitle>{"Deseja realmente deletar?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Produto: {post?.nomeProduto}<br/>
                        Categoria: {post?.categoria?.nomeCategoria}
                    </DialogContentText>
                </DialogContent>
                <DialogActions className='button-deletar'>
                    <Button variant='contained' onClick={sim}>Confirmar</Button>
                    <Button onClick={handleClose}>Voltar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
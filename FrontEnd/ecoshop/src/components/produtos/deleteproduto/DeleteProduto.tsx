import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import './DeleteProduto.css'
import { useNavigate, useParams } from 'react-router-dom';
import { forwardRef, ReactElement, Ref, useContext, useEffect, useState,  } from 'react';
import { useSelector } from 'react-redux';
import Produto from '../../../models/Produto';
import { TokenState } from '../../../store/tokens/tokensReduce';
import { buscaId, deleteId } from '../../../service/Service';
import axios from 'axios';
import { UtilContext } from '../../../context/utilcontext/UtilContext';
import { ToastError, ToastInfo } from '../../styles/toast/Toasts';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface propsDeleteProduto {
    idProduto: number
}

export const DeleteProduto = (propsDeleteProduto: propsDeleteProduto) => {

    const [open, setOpen] = useState(false);
    const [post, setPosts] = useState<Produto>()
    const { respApiValue, openBackDrop, closeBackDrop } = useContext(UtilContext)
    const { idProduto } = propsDeleteProduto

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let navigate = useNavigate();

    const handleClickOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    useEffect(() => {
        if (!open) {
            navigate('/vender')
        }
    }, [open])

    useEffect(() => {
        if (idProduto !== 0) {
            findById(idProduto)
        }
    }, [idProduto])

    async function findById(id: number) {
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

    function onSubmit() {
        try {
            openBackDrop()
            deleteId(`/produtos/${idProduto}`, {
                headers: {
                    'Authorization': token
                }
            });

            ToastInfo(post?.nomeProduto + ' deletado com sucesso!')
            respApiValue(1)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (!error?.response) {
                    navigate('/error')
                }

                ToastError(error.message)
            }
        }

        handleClose()
        closeBackDrop()
    }

    return (
        <div>
            <Button variant="outlined" size='small' onClick={handleClickOpen}>
                Deletar
            </Button>
            <Dialog open={open} TransitionComponent={Transition} onClose={handleClose} keepMounted >
                <DialogTitle>{"Deseja realmente deletar?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Produto: {post?.nomeProduto}<br />
                        Categoria: {post?.categoria?.nomeCategoria}
                    </DialogContentText>
                </DialogContent>
                <DialogActions className='button-deletar'>
                    <Button variant='contained' size='small' onClick={onSubmit}>Confirmar</Button>
                    <Button variant='outlined' size='small' onClick={handleClose}>Voltar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
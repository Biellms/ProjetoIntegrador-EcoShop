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
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Produto from '../../../models/Produto';
import { TokenState } from '../../../store/tokens/tokensReduce';
import { buscaId, deleteId } from '../../../service/Service';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const DeleteProdutoResp = () => {

    const [open, setOpen] = useState(false);

    const [deletado, setDeletado] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDeletado(true)
    };

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    const [post, setPosts] = useState<Produto>()

    useEffect(() => {
        if (token == "") {
            
            alert('Você precisa estar logado!')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    useEffect(() => {
        if(deletado) {
            navigate('/vender')
        }
    })

    async function findById(id: string) {
        buscaId(`/produtos/${id}`, setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        handleClose()
        setDeletado(true)
        deleteId(`/produtos/${id}`, {
            headers: {
                'Authorization': token
            }
        });
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Deletar
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Deseja realmente deletar?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Produto: {post?.nomeProduto}<br/>
                        Categoria: {post?.categoria?.nomeCategoria}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={sim}>Confirmar</Button>
                    <Button onClick={handleClose}>Voltar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
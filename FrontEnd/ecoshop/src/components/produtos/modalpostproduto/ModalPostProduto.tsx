import './ModalPostProduto.css'
import { useState, useContext, useEffect } from 'react';
import { Button, Modal } from '@mui/material';
import { PostProduto } from '../postproduto/PostProduto';
import { UtilContext } from '../../../context/utilcontext/UtilContext';
import { propsModalPostProduto } from '../../../models/Props';

export const ModalPostProduto = (propsPostProduto: propsModalPostProduto) => {

    const { idProduto, textModal } = propsPostProduto
    const { modal } = useContext(UtilContext)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        handleClose()

    }, [modal])

    return (
        <>
            <Button onClick={handleOpen} variant="contained" className="button-vender" size='small'>
                {textModal}
            </Button>
            <Modal open={open} onClose={handleClose}>
                <div className='container-post'>
                    <PostProduto idProduto={idProduto}/>
                </div>
            </Modal>
        </>
    );
}
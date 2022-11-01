import './ModalPostProduto.css'
import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import { PostProduto } from '../postproduto/PostProduto';

export const ModalPostProduto = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <Button onClick={handleOpen} variant="contained" className="button-vender">CADASTRAR PRODUTO</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <PostProduto/>
            </Modal>
        </>
    );
}
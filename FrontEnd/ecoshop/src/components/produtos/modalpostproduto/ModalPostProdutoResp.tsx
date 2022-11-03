import './ModalPostProduto.css'
import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import { PostProdutoResp } from '../postproduto/PostProdutoResp';

export const ModalPostProdutoResp = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <Button onClick={handleOpen} variant="contained" className="button-vender">CADASTRAR</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <PostProdutoResp/>
            </Modal>
        </>
    );
}
import React from 'react'
import Modal from '@material-ui/core/Modal';
import { Button, Box } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';
import './ModalProduto.css';
import CadastroProduto from '../cadastroProduto/CadastroProduto';

function ModalProduto() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <Box>
            <Box display="flex" justifyContent="flex-end" className="cursor">
                <CloseIcon className='close-icon' onClick={handleClose} />
            </Box>
            <CadastroProduto />
        </Box>
    );

    return (
        <div>
            <Button variant="outlined" className="botao" onClick={handleOpen}>
                Cadastrar Produto
            </Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" >
                {body}
            </Modal>
        </div>
    );
}
export default ModalProduto;
import { Backdrop, CircularProgress } from "@mui/material"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const BackDrop = () => {

    const { open } = useContext(CartContext)

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
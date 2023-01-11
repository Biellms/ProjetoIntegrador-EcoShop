import { Backdrop, CircularProgress } from "@mui/material"
import { useContext } from "react"
import { UtilContext } from "../../context/utilcontext/UtilContext"

export const BackDrop = () => {

    const { backdrop } = useContext(UtilContext)

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={backdrop}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
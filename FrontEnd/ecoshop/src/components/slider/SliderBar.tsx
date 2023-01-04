import { useContext, useState } from 'react';
import Slider from '@mui/material/Slider';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const SliderBar = () => {

    const [value, setValue] = useState<number[]>([0, 200]);
    const navigate = useNavigate()
    const { respValue } = useContext(CartContext)

    const handleChange = (e: Event, newValue: number | number[]) => {
        e.preventDefault()

        setValue(newValue as number[]);
    };

    const onSubmit = () => {
        const id = value[0].toString()
        const id2 = value[1].toString()

        navigate(`/comprar/${id}/filtro/${id2}`)
        respValue(2)
    }

    return (
        <>
            <Slider
                min={0}
                max={200}
                value={value}
                onChange={handleChange}
                size='small'
                valueLabelDisplay="auto"
            />
            <Button variant='outlined' onClick={onSubmit}>
                aplicar
            </Button>
        </>
    );
}
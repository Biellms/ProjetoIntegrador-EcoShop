import { useContext, useEffect, useState } from 'react';
import Slider from '@mui/material/Slider';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { UtilContext } from '../../../context/utilcontext/UtilContext';

const PrettoSlider = styled(Slider)({
    color: '#97C160',
    '& .MuiSlider-valueLabel': {
      backgroundColor: '#97C160',
    },
  });

export const SliderPrecoEntre = () => {

    const [value, setValue] = useState<number[]>([0, 150]);
    const navigate = useNavigate()
    const { respApiValue } = useContext(UtilContext)

    const handleChange = (e: Event, newValue: number | number[]) => {
        e.preventDefault()

        setValue(newValue as number[]);
    };

    const onSubmit = () => {
        const id = value[0].toString()
        const id2 = value[1].toString()

        navigate(`/comprar/${id}/filtro/${id2}`)
        respApiValue(2)
    }

    function valuetext(value: number) {
        return `$ ${value}`;
    }

    return (
        <>
            <PrettoSlider
                min={0}
                max={150}
                value={value}
                onChange={handleChange}
                size='small'
                valueLabelDisplay="auto"
                valueLabelFormat={valuetext}
            />
            <Button size='small' variant='outlined' className="button-sm" onClick={onSubmit}>
                aplicar
            </Button>
        </>
    );
}
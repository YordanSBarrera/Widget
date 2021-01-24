import React, { useState } from 'react'
import Dropdown from './dropdown'
import Convertidor from './convert'

const option = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Español',
        value: 'es'
    },
    {
        label: 'Ruso',
        value: 'ru'
    },
    {
        label: 'Ingles',
        value: 'en'
    }
]
const Translate = () => {
    const [lenguaje, setLenguaje] = useState(option[0])
    const [text,setText]=useState('');
    const label = "Seleccione un Lenguaje"
    return (
        <div>
            <input type="text" onChange={(event)=>{setText(event.target.value)}}/>
            <h3>translate</h3>
            <Dropdown
                dropName={label}
                option={option}
                select={lenguaje}
                onChangeSelect={setLenguaje}
            />
            <hr />
            <Convertidor
                lenguaje={lenguaje.value}
                text={text}
            />
        </div>
    )
}

export default Translate;
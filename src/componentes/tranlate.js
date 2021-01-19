import React, { useState } from 'react'
import Dropdown from './dropdown'

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
    }
]
const Translate = () => {
    const [lenguaje, setLenguaje] = useState(option[0])
    const label = "Seleccione un Lenguaje"
    return (
        <div>
            <h3>translate</h3>
            <Dropdown
                dropName={label}
                option={option}
                select={lenguaje}
                onChangeSelect={setLenguaje}
            />
        </div>
    )
}

export default Translate;
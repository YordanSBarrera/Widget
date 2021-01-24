import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Convert = ({ lenguaje, text }) => {

    const [traduccion, setTraduccion] = useState('');
    const [textRevisado, setTextRevisado] = useState(text);
    useEffect(() => {
        const timeID = setTimeout(() => {
            setTextRevisado(text);
        }, 1000);

        return () => {
            clearTimeout(timeID)
        }
    }, [text])
    useEffect(() => {

        const doTranslation = async () => {

            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
                {}, {
                params: {
                    q: textRevisado,
                    target: lenguaje,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTraduccion(data.data.translations[0].translatedText)

        }
        // console.log(doTranslation)
        doTranslation();
    }, [lenguaje, textRevisado])

    return (
        <div>
            convert
            <h1 className="ui header">{traduccion}</h1>
            <p>{lenguaje}</p>
        </div>
    )
}

export default Convert;
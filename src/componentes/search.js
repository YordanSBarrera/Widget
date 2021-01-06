import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('');

    console.log('prueba de gancho')
    useEffect(() => {
        const resp = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
        };
        console.log(resp)
    }, )
    return (
        <div >
            <div className="ui form">
                <div className='field'>
                    <label>Termino de Busqueda</label>
                    <input
                        type="text"
                        className="input"
                        value={term}
                        onChange={(e) => { setTerm(e.target.value) }}
                    />
                </div>
            </div>
        </div>
    )
}
export default Search;
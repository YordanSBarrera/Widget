import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('Yordan');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResult] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);
        return () => {
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });
            setResult(data.query.search);
        };
        search();
    }, [debouncedTerm])


    const renderResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go
                        </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    <div className="foot">
                        <br />
                        conteo {result.wordcount}
                    </div>
                </div>
            </div>
        );
    });

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
            <br />
            <div className="ui celled list">
                {renderResults}
            </div>
        </div>
    )
}
export default Search;
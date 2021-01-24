import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ option, select, onChangeSelect, dropName }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();


    useEffect(() => {
        console.log('use effect')
        const onBodyClick = (event) => {
            console.log('onBodyClick')
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }

            setOpen(false);
        }
        document.body.addEventListener('click', onBodyClick);

        return () => {
            console.log('Se desmonto el listener')
            document.body.removeEventListener('click', onBodyClick)
        }

    }, []);


    const renderedOptions = option.map((asdasd) => {
        if (asdasd.value === select.value) {
            return null;
        }
        return (
            <div
                key={asdasd.value}
                className="item"
                onClick={() => {
                    onChangeSelect(asdasd);
                    console.log('item click');
                }}
            >
                {asdasd.label}
            </div>
        );
    });

    // console.log(ref.current)
    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">{dropName}</label>
                <div
                    onClick={() => {
                        setOpen(!open)
                        console.log('dropdwon clicp')
                    }}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{select.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`} > {renderedOptions}</div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
import React, { useState } from 'react'

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const itemPrint = items.map((itm, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={itm.title}>
                <div className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {itm.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{itm.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className="ui styled accordion">
            {itemPrint}
            <br />
            <p>Index :{activeIndex}</p>
        </div>
    )
}

export default Accordion;
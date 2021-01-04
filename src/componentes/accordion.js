import React from 'react'

const Accordion = ({ items }) => {

    const itemPrint = items.map((itm) => {
        return (
            <React.Fragment key={itm.title}>
                <div className="title active">
                    <i className="dropdown icon"></i>
                    {itm.title}
                </div>
                <div className="content active">
                    <p>{itm.content}</p>
                </div>
            </React.Fragment>
        )
    })

    console.log(items)
    return (
        <div className="ui styled accordion">
            {itemPrint}
        </div>
    )
}

export default Accordion;
import React from 'react'
import Accordion from './componentes/accordion'
import Search from './componentes/search'

const items=[
  {
    title:'What is React',
    content:'React is a front end javascript framework'
  },
  {
    title:'Why use React?',
    content:'React is a favorite JS librery among engieers'
  },
  {
    title:'How do you use React',
    content:'You use React by create component'
  }
];

export default () => {
  return (
    <div>
      <br/>
      <Accordion items={items}/>
      <br/>
      <Search/>
    </div>
  )
};

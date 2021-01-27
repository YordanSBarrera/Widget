import React, { useState } from 'react'
import Accordion from './componentes/accordion'
import Search from './componentes/search'
import Dropdown from './componentes/dropdown'
import Translate from './componentes/tranlate'
import Route from './componentes/route'
import Header from './componentes/header'
const items = [
  {
    title: 'What is React',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS librery among engieers'
  },
  {
    title: 'How do you use React',
    content: 'You use React by create component'
  }
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
  {
    label: 'Color Negro',
    value: 'black',
  },
  {
    label: 'color griz',
    value: 'gray',
  },
];



export default () => {
  const [select, setSelect] = useState(options[0]);
  const label = "Seleccione un Color"
  return (
    <div className="ui form">
      <Header />

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/">
        <Accordion items={items}/>
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          option={options}
          dropName={label}
          select={select}
          onChangeSelect={setSelect}
        />
      </Route>



    </div>
  )
};

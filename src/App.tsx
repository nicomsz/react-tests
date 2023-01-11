import { useState } from 'react'


function App() {
  const [ list, setList] = useState(['Diego', 'Rodz', 'Mayk']) 
  function addToList() {
    setList(state => [...state, 'Novo'])
  }
 
  return (
    <div>
     Hello World
     <button onClick={addToList}>Adicionar</button>
     <ul>
        {list.map( item => <li key={item}>{item}</li>)}
     </ul>
    </div>
  )
}

export default App

import { useState } from 'react'


function App() {
  const [NewItem, setNewItem] = useState('')
  const [list, setList] = useState(['Diego', 'Rodz', 'Mayk']) 
  function addToList() {
    setList(state => [...state, NewItem])
  }
 
  return (
    <div>
     Hello World
     <input placeholder='input' type='text' value={NewItem} onChange={e => setNewItem(e.target.value)}/>
     <button onClick={addToList}>Adicionar</button>
     <ul>
        {list.map( item => <li key={item}>{item}</li>)}
     </ul>
    </div>
  )
}

export default App

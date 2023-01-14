import { useState } from 'react'


function App() {
  const [NewItem, setNewItem] = useState('')
  const [list, setList] = useState(['Diego', 'Rodz', 'Mayk']) 
  function addToList() {
    setTimeout(() => {
        setList(state => [...state, NewItem])
    }, 500)
  }
  
  function removeFromList(item : string) {
    setTimeout(() => {
    setList(state =>  state.filter(item => item !== item));
    }, 500)
  }
 
  return (
    <div>
     Hello World
     <input placeholder='input' type='text' value={NewItem} onChange={e => setNewItem(e.target.value)}/>
     <button onClick={addToList}>Adicionar</button>
     <ul>
        {list.map( item => (
        <li key={item}>
          {item}
          <button onClick={ () => {removeFromList(item)}}>Remover</button>
        </li>
        
        ))}
     </ul>
    </div>
  )
}

export default App

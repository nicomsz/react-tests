import { useState } from 'react'    
type ListProps = {
    initialItems: string[]
}


export function List({ initialItems }: ListProps) {
  const [newItem, setnewItem] = useState('')
  const [list, setList] = useState(initialItems)
  
  function addToList() {
    setTimeout(() => {
        setList(state => [...state, newItem])
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
     <input placeholder='input' type='text' value={newItem} onChange={e => setnewItem(e.target.value)}/>
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



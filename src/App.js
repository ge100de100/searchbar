import { useRef, useState,useMemo } from 'react';
import './App.css';

function App() {
  const [items, setItems]= useState([])
  const [query, setQuery] = useState('')
  const refInput = useRef()

  const filteredItems = useMemo(()=>{
    return items.filter(item => {
       return item.toLowerCase().includes(query.toLowerCase())
  })
  },[items, query ])


 const handleClick=(e)=>{
e.preventDefault()
const value = refInput.current.value
if(value === "") return
setItems(prev=>{
  return [...prev,value]
}
)

refInput.current.value=''

 }


    
  return (
    <div className="App">
      <label>
      
       <span>Search:</span>  <input type='text' value={query} onChange={e => setQuery(e.target.value)}/>
        
        </label>

        <label>
        <span>New Item:</span>
        <input ref={refInput} type='text' />
        <button onClick={handleClick}>Add Item</button>
        
        

        </label>
      <h2>Items</h2>
      {filteredItems.map(item=>(
        <div><li>{item}</li></div>
      ))}
  
    </div>
  );
}

export default App;
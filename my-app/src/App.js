import './App.css';
import {items} from './data.js'
import React, {useState} from 'react'
import ProductTable from './components/ProductTable'
import Header from './components/Header'


function App() {
  const [search, setSearch] = useState("")
  const [inStock, setInStock] = useState(false)

  

  return (
    <div className="App" style={{width: "500px", border: "1px solid yellow"}}>
      <Header search={search} setSearch={setSearch} inStock={inStock} setInStock={setInStock}/>
      <ProductTable items={items} search={search} inStock={inStock}/>
    </div>
  );
}

export default App;


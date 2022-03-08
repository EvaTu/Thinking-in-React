import React from 'react';

function Header({search, setSearch, inStock, setInStock}){

  

    return(
      <form style={{padding: "5px", border: "1px solid blue", display: "flex", flexDirection: "column", width: "400px"}}>
        <input id="search" type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)}/>
        <label>
        <input id="inStock" type="checkbox" checked={inStock} onChange={e => setInStock(e.target.checked)}/>
        Only show products in stock
        </label>
      </form>
    )
  }

  export default Header
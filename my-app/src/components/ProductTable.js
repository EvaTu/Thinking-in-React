import React from 'react';
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'


function ProductTable({items, search, inStock}){

    let searchItems = items.filter(item => item.name.includes(search))
                           .filter(item => inStock? item.stocked : item)

    const row = []
    let lastCategory
    for(let item of searchItems){
        if(item.category !== lastCategory){
            row.push(<ProductCategoryRow category={item.category} key={item.category} />)
        }
        row.push(<ProductRow key={item.name} name={item.name} stocked={item.stocked} price={item.price} />)
        lastCategory = item.category
    }
 


    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
         {row}
        </tbody>
      </table>
    )
  }

  export default ProductTable
import React from 'react';


function ProductRow({price, stocked, name}){
    return(
      <tr>
        <td style={{color: stocked? "black": "red"}}>{name}</td>
        <td>{price}</td>
      </tr>
    )
  }

  export default ProductRow
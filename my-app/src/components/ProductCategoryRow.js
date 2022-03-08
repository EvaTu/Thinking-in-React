import React from 'react';

function ProductCategoryRow({category}){
    return(
      <tr style={{fontweight: 'bold'}}>
        <td>{category}</td>
      </tr>
    )
  }

  export default ProductCategoryRow
import React from 'react'
import ProductCard from './ProductCard'

const ProductList = (props) => {
    // console.log(props)
  return (
    <div>
        {
            props.items.map((el,i)=><ProductCard  key={i} product={el} alertFunction={props.hadleFunctionAlert}  />)
        }
    </div>
  )
}

export default ProductList
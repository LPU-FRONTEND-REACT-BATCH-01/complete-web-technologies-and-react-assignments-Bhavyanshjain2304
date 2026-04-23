import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../RTK/cartSlice'

const Products = () => {
    const cartItem = useSelector(state => state.cart.products)
    console.log(cartItem)
    const dispatch = useDispatch()

    let product1 = {
        id:1,
        name:"Laptop",
        price:300000
    }
  return (
    <div>
        <button onClick={()=>dispatch(addToCart(product1))} >Add to cart</button>
    </div>
  )
}

export default Products
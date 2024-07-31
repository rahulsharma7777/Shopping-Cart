import React from 'react'
import useCart  from '../hooks/useCart'
import { useState } from 'react'
import CartIemLine from './CartIemLine'

const Cart = () => {
  const[confirm,setConfirm]=useState<boolean>(false)
  const{dispatch,REDUCER_ACTIONS, totalItems,totalPrice,cart}=useCart()

  const onSubmitOrder=()=>{
    dispatch({type:REDUCER_ACTIONS.SUBMIT})
    setConfirm(true)
  }
  const pageContent=confirm ?<h2>Thanl you for your Order</h2>:<>
   <h2 className='offscreen'>Cart</h2>
   <ul className='cart'>
    {cart.map(item=>{
      return(
        <CartIemLine
        key={item.sku}
        item={item}
        dispatch={dispatch}
        REDUCER_ACTION={REDUCER_ACTIONS}
        />  
      )
    })}
   </ul>
   <div className='card_totals'>
    <p>Total Items:{totalItems}</p>
    <p>Total Price:{totalPrice}</p>
    <button disabled={!totalItems}className="cart_submit"
    onClick={onSubmitOrder}
    >
      place Order
      </button>   </div>
  </>
  const content=(
    <main className='main mian-cart'>
      {pageContent}
    </main>
  )
  return content
}

export default Cart

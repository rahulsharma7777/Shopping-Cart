import React from 'react'
import useCart from '../hooks/useCart'
type PropsType={
    viewCart:boolean;

}

const Footer = ({viewCart}:PropsType) => {
    const {totalItems,totalPrice}=useCart()
    const year:number =new Date().getFullYear();
    const PageContent= viewCart? <p>Shopping Cart &copy;{year}</p>:
    (<>
       <p>Total Items:{totalItems}</p>
       <p>Total Price:{totalPrice}</p>
       <p>Shopping cart &copy; {year}</p>
    </>)
    const content=(
      <footer className='footer'>
        {PageContent}
      </footer>
    )
    return content  
}

export default Footer

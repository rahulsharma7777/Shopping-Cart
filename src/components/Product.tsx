import React, { ReactElement } from 'react'
import { ProductType } from '../context/ProductProvider'
import { ReducerAction, ReducerActionType } from '../context/CartProvider'

type PropsType={
    product:ProductType,
    dispatch:React.Dispatch<ReducerAction>,
    REDUCER_ACTION:ReducerActionType ,
    inCart:boolean,

}
const Product = ({product,dispatch,REDUCER_ACTION,inCart}:PropsType):ReactElement  => {

    const img:string= new URL(`../images/${product.sku}.jpg`,import.meta.url).href 
    console.log(img)
    const onAddToCart=()=>dispatch({type:REDUCER_ACTION.ADD,payload:{...product,qty:1}})
    const itemInCart= inCart ? '-> Item in the Cart':null
    const content = 
           <article className='product'>
            <h3>{product.name}</h3>
        <img src={img} alt={product.name} className='product_img'>
       
        </img>
        <p>{new Intl.NumberFormat('en-US',{style:'currency',currency :'USD'}).format(product.price)}
            {itemInCart}
         </p>
         <button onClick={onAddToCart}>Add to Cart</button>
           </article>
  return content
}
// function areItemsEqual({item:prevItem}:PropsType,{item:nextItem}:PropsType)
// {
//     return Object.keys(prevItem).every(key=>{
//              return prevItem[key as keyof  CartItemType]===nextItem[key as keyof CartItemType]

//     })&& prevItem===nextItem
// }

export default Product

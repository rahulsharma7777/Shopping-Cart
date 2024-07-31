import React, { ChangeEvent, memo, ReactElement } from "react";
import { CartItemType } from "../context/CartProvider";
import { ReducerAction } from "../context/CartProvider";

import { ReducerActionType } from "../context/CartProvider";
type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTION: ReducerActionType;
};
const CartItemLine = ({ item, dispatch, REDUCER_ACTION }: PropsType) => {
  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url)
    .href;
  const lineTotal: number = item.qty * item.price;
  const highestQty: number = 20 > item.qty ? 20 : item.qty;
  const optionValues: number[] = [...Array(highestQty).keys()].map(
    (i) => i + 1
  );
  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={`opt${val}`} value={val}>
        {val}
      </option>
    );
  });
  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTION.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };
  const onRemoveFromCart = () => {
    dispatch({ type: REDUCER_ACTION.REMOVE, payload: item });
  };
  const content = (
    <li className="cart_item">
      <img src={img} alt={item.name} className="cart_img" />
      <div aria-label="Item Name">{item.name}</div>
      <div aria-label="Price Per Item">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(item.price)}
      </div>
      <label htmlFor="itemQty" className="offscreen">
        Item Quantity
      </label>
      <select
        value={item.qty}
        name="itemQty"
        id="itemQty"
        aria-label="Item Quantity"
        onChange={onChangeQty}
        className="cart__select"
      >
        {options}
      </select>
      <div aria-label="Line Item Subtotal" className="cart__item-subtotal">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(lineTotal)}
      </div>
      <button
        className="cart__button"
        aria-label="Remove Item From Cart"
        title="Remove from Cart"
        onClick={onRemoveFromCart}
      >
        ❌
      </button>
    </li>
  );

  return content;
};
function areItemsEqual({item:prevItem}:PropsType,{item:nextItem}:PropsType)
{
    return Object.keys(prevItem).every(key=>{
             return prevItem[key as keyof  CartItemType]===nextItem[key as keyof CartItemType]

    })&& prevItem===nextItem
}
const MemoizedCardLineItem=memo<typeof CartItemLine >
export default MemoizedCardLineItem;

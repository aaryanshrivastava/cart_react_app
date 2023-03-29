// Keys given to elements in a list(in React), are unique among the siblings only.
// props are similar to arguments, which we pass to functions.
// props in react cannot be changed in the Component
// props are used to pass information from one component to another
// anything can be passed as a prop in react including eventhandlers.
// React props can be accessed as an object or destructured
// Props cannot be directly uploaded

import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { products } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteQuantity={props.onDeleteQuantity}
          />
        );
      })}
    </div>
  );
};

export default Cart;

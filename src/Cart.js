// Keys given to elements in a list(in React), are unique among the siblings only.
// props are similar to arguments, which we pass to functions.

import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 9999,
          title: "Mobile Phone",
          qty: 10,
          img: "",
          id: 2,
        },
        {
          price: 25000,
          title: "Laptop",
          qty: 4,
          img: "",
          id: 3,
        },
      ],
    };
    // this.testing();
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}

export default Cart;

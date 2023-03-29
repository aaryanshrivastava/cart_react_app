// Keys given to elements in a list(in React), are unique among the siblings only.
// props are similar to arguments, which we pass to functions.
// props in react cannot be changed in the Component
// props are used to pass information from one component to another
// anything can be passed as a prop in react including eventhandlers.
// React props can be accessed as an object or destructured
// Props cannot be directly uploaded

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
  handleIncreaseQuantity = (product) => {
    console.log("incresing the quantity of :", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };

  handleDecreaseQuantity = (product) => {
    console.log("incresing the quantity of :", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };
  handleDeleteQuantity = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id); // an array which contains products.
    this.setState({
      products: items,
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteQuantity={this.handleDeleteQuantity}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;

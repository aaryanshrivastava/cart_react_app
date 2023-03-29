import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    // this has been shifted from the CartItem to here so as to make data transfer viable wrt props.
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
          id: 1,
        },
        {
          price: 9999,
          title: "Mobile Phone",
          qty: 10,
          img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=367&q=80",
          id: 2,
        },
        {
          price: 25000,
          title: "Laptop",
          qty: 4,
          img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=951&q=80",
          id: 3,
        },
      ],
    };
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
  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };
  getCartTotal = () => {
    const { products } = this.state;
    let CartTotal = 0;
    products.map((product) => {
      CartTotal = CartTotal + product.qty * product.price;
    });
    return CartTotal;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteQuantity={this.handleDeleteQuantity}
        />
        <div style={{ padding: 10, fontSize: 20 }}>
          Total :{this.getCartTotal()}
        </div>
      </div>
    );
  }
}
export default App;

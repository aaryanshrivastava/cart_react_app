// but with the arrow function we can bind the value of this keyword;
//setState : concept of batching is involved in this. Thus in an eventhandler no matter how many times you call, the setState call will
//           only be implement once, thus merging all calls in single state call. This is done to make efficiency better. I always selects
//           the last value not the most one as a part of the shallow selecting or Batching.
//           setState call is asynchronous.
import React from "react";
class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Mobile Phone",
      qty: 1,
      img: "",
    };
  }

  increaseQuantity = () => {
    console.log("this", this.state);

    //set_state form 1
    this.setState({
      title: "Some New Title",
    });

    //set_state form 2 , if prevState state is required then use this, else use the above ones.
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };
  decreaseQuantity = () => {
    const { qty } = this.state;
    if (qty == 0) {
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };
  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{this.state.title}</div>
          {/*Direct from Constructor*/}

          <div style={{ color: "#777" }}>{price} ₹</div>
          {/* from object De-Structuring */}

          <div style={{ color: "#777" }}>Qty :{qty}</div>
          <div className="cart-item-actions">
            {/* buttons */}
            <img
              alt="increase"
              className="actions-icons"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
              onClick={this.increaseQuantity /* .bind(this) */}
            />

            <img
              alt="decrease"
              className="actions-icons"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="actions-icons"
              src="https://cdn-icons-png.flaticon.com/512/484/484611.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 100,
    width: 100,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;

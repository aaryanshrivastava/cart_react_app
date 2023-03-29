// but with the arrow function we can bind the value of this keyword;
//setState : concept of batching is involved in this. Thus in an eventhandler no matter how many times you call, the setState call will
//           only be implement once, thus merging all calls in single state call. This is done to make efficiency better. I always selects
//           the last value not the most one as a part of the shallow merging or Batching
//           setState does batching as in for default for each eventHandlers, but AJAX call or the promises react doesnt do,
//           do batching for us so it might act as a synchronous call too.
//           setState call is asynchronous.
//           when you call setState() inside render() method,setState() invokes render().It gets into an infinite loop.
//           When setState is called multiple times it is batched together and re render happens only once.
//           The callbacks for both setStates will be fired after re-render.

import React from "react";

class CartItem extends React.Component {
  // testing() {
  //   const promise = new Promise((resolve, reject) => {
  //     //setState acts like a synchronous call, so thus we can we the up to date state.
  //     setTimeout(() => {
  //       resolve("done");
  //     }, 5000);
  //   });
  //   promise.then(() => {
  //     this.setState({ qty: 100 });
  //     console.log("state", this.state);
  //   });
  // }

  increaseQuantity = () => {
    // console.log("this", this.state);
    //set_state form 1
    // this.setState({
    //   title: "Some New Title",
    // });

    //set_state form 2 , if prevState state is required then use this, else use the above ones.
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  decreaseQuantity = () => {
    const { qty } = this.state;
    if (qty === 0) {
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };
  render() {
    console.log("this.props", this.props);
    const { price, title, qty } = this.props.product;
    const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteQuantity,
    } = this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
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
              onClick={() => onIncreaseQuantity(product)}
            />

            <img
              alt="decrease"
              className="actions-icons"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="actions-icons"
              src="https://cdn-icons-png.flaticon.com/512/484/484611.png"
              onClick={() => onDeleteQuantity(product.id)}
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

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
            />
            <img
              alt="decrease"
              className="actions-icons"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"
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

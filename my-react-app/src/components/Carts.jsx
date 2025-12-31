import React, { useEffect, useState } from "react";

function Carts() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then(res => res.json())
      .then(data => setCarts(data.carts));
  }, []);

  return (
    <div>
      <h2>Shopping Carts</h2>

      {carts.map(cart => (
        <div key={cart.id} style={{ border: "1px solid #ccc", margin: "15px", padding: "10px" }}>
          <h3>Cart ID: {cart.id}</h3>

          {cart.products.map(product => (
            <div
              key={product.id}
              style={{
                display: "flex",
                gap: "15px",
                marginBottom: "10px",
                borderBottom: "1px solid #eee",
                paddingBottom: "10px"
              }}
            >
              <img src={product.thumbnail} width="100" alt={product.title} />

              <div>
                <p><b>{product.title}</b></p>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Total: ${product.total}</p>
                <p>Discounted Total: ${product.discountedTotal}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Carts;

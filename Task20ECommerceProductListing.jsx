// App.js
import React, { useState } from "react";

export default function Task20EcommerceProductListing() {
  const products = [
    { id: 1, name: "Wireless Mouse", price: 499 },
    { id: 2, name: "Mechanical Keyboard", price: 2499 },
    { id: 3, name: "USB-C Hub", price: 1299 },
    { id: 4, name: "Laptop Stand", price: 899 },
  ];

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const getTotalItems = () =>
    cartItems.reduce((sum, item) => sum + item.qty, 0);

  const getTotalPrice = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f5f7fb;
        }
        .page {
          max-width: 1000px;
          margin: 30px auto;
          padding: 0 16px;
        }
        .main-heading {
          text-align: center;
          font-size: 28px;
          font-weight: bold;
          color: #283593;
          margin-bottom: 6px;
        }
        .main-sub {
          text-align: center;
          font-size: 15px;
          color: #666666;
          margin-bottom: 20px;
        }
        .layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 16px;
        }
        .card {
          background: #ffffff;
          padding: 16px 18px;
          border-radius: 10px;
          box-shadow: 0 3px 8px rgba(0,0,0,0.08);
        }
        .card-heading {
          font-size: 18px;
          font-weight: bold;
          color: #283593;
          margin-bottom: 6px;
        }
        .card-sub {
          font-size: 14px;
          color: #777777;
          margin-bottom: 10px;
        }
        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 12px;
        }
        .product-item {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 10px 12px;
          font-size: 14px;
          background: #fafbff;
        }
        .product-name {
          font-weight: bold;
          margin-bottom: 4px;
        }
        .product-price {
          color: #444444;
          margin-bottom: 8px;
          font-size: 13px;
        }
        button {
          background-color: #3949ab;
          color: #ffffff;
          border: none;
          padding: 6px 12px;
          font-size: 13px;
          border-radius: 6px;
          cursor: pointer;
        }
        button:hover {
          background-color: #283593;
        }
        .cart-item {
          border-bottom: 1px solid #eee;
          padding: 6px 0;
          font-size: 13px;
          display: flex;
          justify-content: space-between;
        }
        .cart-empty {
          font-size: 13px;
          color: #777777;
        }
        .cart-summary {
          margin-top: 10px;
          font-size: 14px;
          font-weight: bold;
          color: #283593;
        }
      `}</style>

      <div className="page">
        <div className="main-heading">Pixel Online</div>
        <div className="main-sub">
          Gadgets for everydat life.
        </div>

        <div className="layout">
          {/* Products */}
          <div className="card">
            <div className="card-heading">Products</div>
            <div className="card-sub">
              Click “Add to Cart” to add items to your shopping cart.
            </div>

            <div className="product-list">
              {products.map((p) => (
                <div key={p.id} className="product-item">
                  <div className="product-name">{p.name}</div>
                  <div className="product-price">₹{p.price}</div>
                  <button onClick={() => handleAddToCart(p)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="card">
            <div className="card-heading">Your Cart</div>
            <div className="card-sub">
              Items you have added will appear here with quantity.
            </div>

            {cartItems.length === 0 ? (
              <div className="cart-empty">Your cart is empty.</div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <span>
                      {item.name} x {item.qty}
                    </span>
                    <span>₹{item.price * item.qty}</span>
                  </div>
                ))}
                <div className="cart-summary">
                  Total Items: {getTotalItems()} | Total: ₹{getTotalPrice()}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}



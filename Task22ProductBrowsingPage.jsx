// App.js
import React, { useState } from "react";

export default function Task22ProductBrowsingPage() {
  const products = [
    { id: 1, name: "Notebook", category: "Stationery" },
    { id: 2, name: "Blue Pen", category: "Stationery" },
    { id: 3, name: "USB Drive 32GB", category: "Electronics" },
    { id: 4, name: "Headphones", category: "Electronics" },
    { id: 5, name: "Water Bottle", category: "Others" },
  ];

  const categories = ["All", "Stationery", "Electronics", "Others"];
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #dde4ff;
        }
        .page {
          max-width: 1000px;
          margin: 40px auto;
          padding: 0 20px;
        }
        .title {
          font-size: 24px;
          font-weight: bold;
          color: #283593;
          margin-bottom: 8px;
        }
        .sub {
          font-size: 14px;
          color: #555;
          margin-bottom: 24px;
        }
        .layout {
          display: grid;
          grid-template-columns: 230px 1fr; /* bigger sidebar */
          gap: 22px;
        }
        .side,
        .main-box {
          background: #ffffff;
          border-radius: 12px;
          padding: 22px 20px;            /* bigger padding */
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }
        .side-title {
          font-size: 15px;
          font-weight: bold;
          color: #283593;
          margin-bottom: 14px;
        }
        .cat-btn {
          display: block;
          width: 100%;
          text-align: left;
          padding: 10px 12px;           /* bigger button */
          margin-bottom: 8px;
          font-size: 14px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          background: #e8eaf6;
          color: #283593;
        }
        .cat-btn.active {
          background: #3949ab;
          color: #ffffff;
        }
        .main-title {
          font-size: 18px;               /* bigger text */
          font-weight: bold;
          color: #283593;
          margin-bottom: 8px;
        }
        .main-sub {
          font-size: 13px;
          color: #666;
          margin-bottom: 18px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* bigger cards */
          gap: 18px;
        }
        .product {
          border: 1px solid #cdd0f5;
          border-radius: 12px;
          padding: 18px 16px;            /* bigger card padding */
          background: #f6f7ff;
          font-size: 14px;
        }
        .p-name {
          font-weight: bold;
          margin-bottom: 6px;
        }
        .p-cat {
          font-size: 13px;
          color: #555;
        }
        @media (max-width: 768px) {
          .layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page">
        <div className="title">College Store Browse</div>
        <div className="sub">
          Choose a category on the left to filter products.
        </div>

        <div className="layout">
          {/* Categories */}
          <div className="side">
            <div className="side-title">Categories</div>
            {categories.map((c) => (
              <button
                key={c}
                className={"cat-btn " + (active === c ? "active" : "")}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Products */}
          <div className="main-box">
            <div className="main-title">
              {active === "All" ? "All products" : active + " products"}
            </div>
            <div className="main-sub">Showing {visible.length} item(s).</div>

            <div className="grid">
              {visible.map((p) => (
                <div key={p.id} className="product">
                  <div className="p-name">{p.name}</div>
                  <div className="p-cat">{p.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



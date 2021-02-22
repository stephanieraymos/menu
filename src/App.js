import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Catergories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  document.title = "Menu";
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu />
      </section>
    </main>
  );
}

export default App;

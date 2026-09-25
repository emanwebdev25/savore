import { useState } from "react"
import { menuItems } from "../data/menu"

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Desi")

  const categories = [
    "Desi",
    "Continental",
    "Starters",
    "Pizza & Burgers",
    "Desserts",
    "Drinks",
  ]

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  )

  return (
    <main className="menu-page">
      <section className="menu-header">
        <p>THE SAVORÉ MENU</p>
        <h1>A Table Full of Flavor</h1>
        <span>
          Explore our selection of Desi favorites and Continental classics.
        </span>
      </section>

      <section className="menu-list">
        <div className="menu-categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div className="menu-card" key={item.name}>
              <img src={item.image} alt={item.name} />

              <div className="menu-card-content">
                <h3>{item.name}</h3>
                <p>PKR {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Menu
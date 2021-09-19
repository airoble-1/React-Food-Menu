import React, { useState } from "react"
import Menu from "./Menu"
import Categories from "./Categories"
import items from "./data"
const allCtegories = ["all", ...new Set(items.map((item) => item.category))]
function App() {
  const [Menuitems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCtegories)

  const filterHandler = (category) => {
    console.log(category)
    if (category === "all") {
      setMenuItems(items)
      return
    }
    const filteredItems = items.filter((item) => category === item.category)
    setMenuItems(filteredItems)
  }

  return (
    <main className="section menu">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterHandler} />
      <Menu items={Menuitems} />
    </main>
  )
}

export default App

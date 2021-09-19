import React from "react"

const Categories = ({ categories, filterItems }) => {
  return (
    <ul className="btn-container">
      {categories.map((category, index) => {
        return (
          <li key={index}>
            <div className="filter-btn" onClick={() => filterItems(category)}>
              {category}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories

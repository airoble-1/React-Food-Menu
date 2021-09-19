import React from "react"

const Menu = ({ items }) => {
  const menuGrid = items.map((item) => (
    <article key={item.id} className="menu-item">
      <img className="photo" src={item.img} alt={item.title} />
      <div>
        <div className="item-info">
          <header>
            <h4>{item.title}</h4>
            <h4 className="price">{item.price}</h4>
          </header>
        </div>
        <p className="item-text">{item.desc}</p>
      </div>
    </article>
  ))
  return <section className="section-center">{menuGrid}</section>
}

export default Menu

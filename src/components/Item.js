import React from "react"
import "./Item.scss"

export function Item({ headline, number, text, sub, price }) {
  return (
    <div className="item">
      <div className="item-text-wrapper">
        <h3 className="item-headline">{headline}</h3>
        {text && <div className="item-text">{text}</div>}
        {sub && <sub className="item-sub">{sub}</sub>}
      </div>
      <div>
        <div className="item-price">{price.toFixed(2)} €</div>
      </div>
    </div>
  )
}

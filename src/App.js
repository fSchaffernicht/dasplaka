import React from "react"

import { Item } from "./components"

import data from "./data.json"

function sortOrder(a, b) {
  return a.order - b.order
}

function App() {
  return (
    <div className="container">
      <div className="intro-container">
        <h1>Taverne Plaka Speisekarte</h1>
        <div>
          Täglich, außer Sonntags von 17:30 - 23:30 geöffnet. <br />
          Warme Küche bis 22:30uhr.
          <br />
          <br />
        </div>
        <div>Bestellungen zum abholen bitte Telefonisch unter 069/777721.</div>
      </div>
      {data.sort(sortOrder).map((item, index) => (
        <div className="food-container" key={index}>
          <div className="food-headline-wrapper">
            <h2>{item.headline}</h2>
          </div>
          <div className="food-items-wrapper">
            {item.items.map((subItem, subIndex) => (
              <Item
                headline={subItem.headline}
                text={subItem.text}
                price={subItem.price}
                info={subItem.info}
              />
            ))}
          </div>
        </div>
      ))}
      {
        <div className="imprint-container">
          <h3>Impressum</h3>
          <small>
            Inhaber: Konstantinos Conidas | Telefon: 069 777721 | E-Mail:
            k_conidas@rocketmail.com
          </small>
        </div>
      }
    </div>
  )
}

export default App

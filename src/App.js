import React from "react"

import { Item, Label } from "./components"

function App() {
  return (
    <div className="container">
      <h1>Das Plaka</h1>
      <Label />
      <p>Das hier ist ein Lesetext der nur für die Schrift gedacht ist.</p>
      <Item
        number="12"
        headline="Bifteki"
        text="Hausgemachte Frikadelle gefüllt mit Schafskäse"
        price="13,00"
      />
      <Item
        number="44"
        headline="Gulasch"
        text="Hausgemachte Frikadelle gefüllt mit Schafskäse"
        price="13,00"
      />
      <Item
        number="1"
        headline="Bifteki mit Flei"
        text="gefüllt mit Schafskäse"
        price="13,00"
      />
      <Item number="20" headline="Gulasch" text="Schafskäse" price="1,00" />
    </div>
  )
}

export default App

import styles from "./Header.module.css"

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Taverne Plaka Speisekarte</h1>
      <div>
        Täglich, außer Sonntags von 17:30 - 23:30 geöffnet. <br />
        Warme Küche bis 22:30uhr.
        <br />
        <br />
      </div>
      <div>Bestellungen zum abholen bitte Telefonisch unter 069/777721.</div>
    </div>
  )
}

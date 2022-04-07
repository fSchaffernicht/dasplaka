import React from "react";
import styles from "./Item.module.css";

export function Item({ headline, text, sub, price }) {
  return (
    <div className={styles.item}>
      <div className={styles["item-text-wrapper"]}>
        <h3 className={styles["item-headline"]}>{headline}</h3>
        {text && <div className={styles["item-text"]}>{text}</div>}
        {sub && <sub className={styles["item-sub"]}>{sub}</sub>}
      </div>
      <div>
        <div className={styles["item-price"]}>{price.toFixed(2)} €</div>
      </div>
    </div>
  );
}

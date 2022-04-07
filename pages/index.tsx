import type { NextPage } from "next";
import Head from "next/head";

import { Item } from "../components";
import data from "./data.json";

function sortOrder(a: any, b: any) {
  return a.order - b.order;
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Plaka Taverne</title>
        <meta
          name="description"
          content="Die kleine griechische Taverne in Frankfurt am Main."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="intro-container">
          <h1>Taverne Plaka Speisekarte</h1>
          <div>
            Täglich, außer Sonntags von 17:30 - 23:30 geöffnet. <br />
            Warme Küche bis 22:30uhr.
            <br />
            <br />
          </div>
          <div>
            Bestellungen zum abholen bitte Telefonisch unter 069/777721.
          </div>
        </div>
        {data.sort(sortOrder).map((item, index) => (
          <div className="food-container" key={index}>
            <div className="food-headline-wrapper">
              <h2>{item.headline}</h2>
            </div>
            <div className="food-items-wrapper">
              {item.items.map((subItem, subIndex) => (
                <Item
                  key={subIndex}
                  headline={subItem.headline}
                  text={subItem.text}
                  price={subItem.price}
                  sub={subItem.info}
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
    </>
  );
};

export default Home;

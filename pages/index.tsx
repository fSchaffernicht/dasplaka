import type { GetStaticPropsContext } from "next"
import Head from "next/head"

import { Food, Header, Message } from "@components"
import { client } from "@services"

import { Food as FoodType, Category } from "@types"

interface ItemsWithCategory extends Category {
  items: FoodType[]
}
interface Props {
  data: ItemsWithCategory[]
  message: any
}

export default function Home({ data, message }: Props) {
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
        <Message message={message} />
        <Header />
        {data
          .sort((a, b) => a.order - b.order)
          .map((item, index) => (
            <div className="food-container" key={index}>
              <div className="food-headline-wrapper">
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.info}</p>
                </div>
              </div>
              <div className="food-items-wrapper">
                {item.items.map((subItem, subIndex) => (
                  <Food
                    key={subIndex}
                    headline={subItem.title}
                    text={subItem.description ?? ""}
                    price={Number(subItem.price)}
                    sub={subItem.info ?? ""}
                  />
                ))}
              </div>
            </div>
          ))}
        <div className="imprint-container">
          <h3>Impressum</h3>
          <small>
            Inhaber: Konstantinos Conidas | Telefon: 069 777721 | E-Mail:
            k_conidas@rocketmail.com
          </small>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const connection = await client

    const db = connection.db("food")

    const categoriesCollection = db.collection("categories")
    const foodsCollection = db.collection("foods")
    const messageCollection = db.collection("message")

    const categories = await categoriesCollection
      .find()
      .sort("order", 1)
      .toArray()

    const result = []

    for await (const category of categories) {
      const foods = await foodsCollection
        .find({ group: Number(category.groupId), isAvailable: true })
        .sort("order", 1)
        .toArray()

      result.push({ ...category, items: foods })
    }

    const message = await messageCollection.findOne()

    return {
      props: {
        data: JSON.parse(JSON.stringify(result)),
        message: JSON.parse(JSON.stringify(message)),
      },
    }
  } catch (e) {
    throw e
  }
}

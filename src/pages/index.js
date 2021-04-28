import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Discover</h2>
          <h3>Unique Coffee</h3>
          <strong>More than 6000 outstanding coffees.</strong><br/><br/> <p>Try our AI coffee connoisseur, discover
           the great variaty of coffeebeans, and buy coffee that tastes great every time.
           At BeanBusters we want to enable every coffee enthusiast to discover great coffee, 
           and stop you from ever buying a bad bag of coffee again.<br/><br/>
           Create your free account today to get your unique taste profile and become your own coffee connoisseur.</p>
          <div>
            <Link className={styles.btn} to="/discovercoffee">Discover coffee</Link>
            <Link className={styles.btn} to="/account">Create free account</Link>
          </div>
        </div>
        <div class="grow">
          <Img fluid={ data.file.childImageSharp.fluid } />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query CoffeHome {
    file(relativePath: {eq: "coffeHome.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from "../components/Layout"
import * as styles from '../styles/blogs.module.css'

export default function blog({ data }) {
    const blogs = data.blogs.nodes
    const contact = data.contact.siteMetadata.contact
    return (
        <Layout>
            <div>
                <div className={styles.portfolio}>
                    <h2>Blog about coffee</h2>
                    <div className={styles.blogs}>
                        { blogs.map(blog =>(
                            <Link to={"/projects" + blog.frontmatter.slug} key={blog.id}>
                                <div>
                                    <h3>{ blog.frontmatter.title }</h3>
                                    <p> { blog.frontmatter.stack } </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <p>Like what you see mail me at { contact }</p>
            </div>
        </Layout>
    )
}

// export page query

export const query = graphql`
query BlogPage {
    blogs: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            title
            stack
            slug
            date
          }
          id
        }
    }
    contact: site {
        siteMetadata {
            contact
        }
    }
  }
`
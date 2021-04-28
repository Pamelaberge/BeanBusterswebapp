import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/blog-details.module.css'

export default function BlogDetails() {
    return (
        <Layout>
            <div className={ styles.details }>
                <h2>title</h2>
                <h3>stack</h3>
            </div>
        </Layout>
    )
}

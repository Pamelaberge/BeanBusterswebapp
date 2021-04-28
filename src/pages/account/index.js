import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/account.module.css'

export default function Account() {
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Account</h2>
                <h3>UsernameHere</h3>
                <p>Information about the user should be entered here</p>
                <h4>Favorite coffee</h4>
                <h4>Experience level</h4>
                <h4>Unique taste profile</h4>
                <h4>Favorite notes</h4>
                <h4>Elevation level</h4>
                <h4>Country of origin</h4>
                <h4>Personalized offers</h4>
                <div>sdsdsdsd</div>
            </div>
        </Layout>
    )
}
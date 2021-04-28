import React from 'react'
import Layout from "../components/Layout"
import * as styles from '../styles/localCafe.module.css'

export default function localCafe() {
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Copenhagen Coffee Cruise</h2>
                <h4>Where to find Your next great coffee</h4>
            </div>
        </Layout>
    )
}

import React from 'react'
import CoffeeForm from '../components/Coffeeform'
import Layout from "../components/Layout"
import * as styles from '../styles/localCafe.module.css'

export default function discovercoffee() {
    return (
        <Layout>
            <div>
                <div className={styles.portfolio}>
                    <h2>AI Coffee connoisseur</h2>
                    <h4>Get your personalized selection of coffee and understand which coffee you like and why.</h4>
                    
                    <CoffeeForm />
                </div>
            </div>
        </Layout>
    )
}
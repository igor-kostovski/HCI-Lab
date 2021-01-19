import React, { useContext, useEffect } from "react"
import { navigationContext } from '../constants/contexts';

import Header from "../components/header"
import Footer from "../components/footer"
import PageTitle from "../components/pageTitle"
import styles from './style.module.css'

const Layout = ({ children }) => {
    var { activeTab, setActiveTab } = useContext(navigationContext);

    const capitalize = (string) => {
        if (typeof string !== 'string') return ''
        else if (string === '') return 'Home'
        else if (string === 'aboutUs') return 'About us'
        else if (string === 'specs') return 'Specifications'
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    useEffect(() => {
        setActiveTab(capitalize(String(children.key.slice(1, -1))))
    })

    return (
        <div className={styles.gradient}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout
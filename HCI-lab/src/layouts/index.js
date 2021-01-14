import React, { useContext, useEffect } from "react"
import { navigationContext } from '../constants/contexts';

import Header from "../components/header"
import Footer from "../components/footer"
import PageTitle from "../components/pageTitle"

const Layout = ({ children }) => {
    var { activeTab, setActiveTab } = useContext(navigationContext);

    const capitalize = (string) => {
        if (typeof string !== 'string') return ''
        else if (string === '') return 'Home'
        else if (string === 'aboutUs') return 'About us'
        return string.charAt(0).toUpperCase() + string.slice(1)
      }

    useEffect(() => {
        setActiveTab(capitalize(String(children.key.slice(1, -1))))
    })

    return (
        <>
            <Header />
            {activeTab !== 'Home' && <PageTitle />}
            {children}
            <Footer />
        </>
    );
}

export default Layout
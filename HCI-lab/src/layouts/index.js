import React, { useContext } from "react"
import { navigationContext } from '../constants/contexts';


import Header from "../components/header"
import Footer from "../components/footer"
import PageTitle from "../components/pageTitle"

const Layout = ({ children }) => {
    var { activeTab } = useContext(navigationContext);

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
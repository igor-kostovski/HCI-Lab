import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import PageTitle from "../components/pageTitle"

const Layout = ({ children }) => (
    <>
        <Header />
        <PageTitle />
        {children}
        <Footer />
    </>
)

export default Layout
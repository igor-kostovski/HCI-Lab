import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import PageTitle from "../components/pageTitle"

import styles from "./style.module.css"

const Layout = ({children}) => (
    <>
        <Header />
        <PageTitle />
        {children}
        <Footer />
    </>
)

export default Layout
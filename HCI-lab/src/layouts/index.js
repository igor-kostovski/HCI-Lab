import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import styles from "./style.module.css"

const Layout = ({children}) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
)

export default Layout
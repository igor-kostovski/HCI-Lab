import React from "react"
import { Link } from "gatsby"

import { slide as Menu } from "react-burger-menu"

import { navigationTabs } from "../../constants"

/*const styles = {
    bmBurgerButton: {
        position: "fixed",
        width: '35px',
        height: '35px'
    },

    bmBurgerBars: {
        background: '#ffffff'
    },

    bmMenu: {
        background: "#add8e6",
        paddingTop: "100%"
    },

    bmCross: {
        background: "#ffffff"
    },

    bmItem: {
        display: "block",
        textDecoration: "none",
        marginBottom: "10px",
        color: "#ffffff",
        transition: "color 0.2s",
        textAlign: "center",
        fontFamily: "'Raleway', 'sans-serif'",
        fontSize: "25px",
        marginBottom: "20px"
      },

    bmMenuWrap: {
        position: "fixed",
        top: "0",
        height: "100%"
    }
}*/

const BurgerMenu = () => (   
    <Menu right>
        {navigationTabs.map(({navigationTab, linkTo}) => (
            <Link to={linkTo} key={navigationTab}>
                <div>{navigationTab.toUpperCase()}</div>
            </Link>
        ))}
    </Menu>
)

export default BurgerMenu
import React from "react"
import { Link } from "gatsby"

import { slide as Menu } from "react-burger-menu"

import { navigationTabs } from "../../constants"

const styles = {
    bmBurgerButton: {
        position: "fixed",
        width: '35px',
        height: '35px'
    },

    bmBurgerBars: {
        background: '#373a47'
    },

    
}

const BurgerMenu = () => (
    <Menu styles={styles} right>
        {navigationTabs.map(({navigationTab, linkTo}) => (
            <Link to={linkTo} key={navigationTab}>
                <div>{navigationTab.toUpperCase()}</div>
            </Link>
        ))}
    </Menu>
)

export default BurgerMenu
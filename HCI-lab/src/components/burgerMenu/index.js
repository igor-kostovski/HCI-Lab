import React from "react"
import { Link } from "gatsby"

import { slide as Menu } from "react-burger-menu"

import { navigationTabs } from "../../constants"

const BurgerMenu = () => (   
    <Menu right>
        {navigationTabs.map(({name, linkTo}) => (
            <Link to={linkTo} key={name}>
                <div>{name.toUpperCase()}</div>
            </Link>
        ))}
    </Menu>
)

export default BurgerMenu
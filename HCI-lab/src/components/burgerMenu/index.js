import React, { useState, useContext } from "react"
import { Link } from "gatsby"

import { slide as Menu } from "react-burger-menu"
import OutsideClickHandler from 'react-outside-click-handler';

import { navigationTabs } from "../../constants"
import { navigationContext } from "../../constants/contexts";

import burgerStyles from "./burgerMenuStyle.css"
import styles from "./style.module.css"

const BurgerMenu = () => {
    var { activeTab, setActiveTab } = useContext(navigationContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleStateChange = ({ isOpen }) => {
        setIsOpen(isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <OutsideClickHandler onOutsideClick={() => closeMenu()}>
            <Menu isOpen={isOpen} onStateChange={(menuState) => handleStateChange(menuState)} right>
                {navigationTabs.map(({ name, linkTo }) => (
                    <Link onClick={() => {closeMenu(); setActiveTab(name)}} to={linkTo} key={name}>
                        <div className={name === activeTab ? styles.activeBurgerMenuItem : ""}>{name.toUpperCase()}</div>
                    </Link>
                ))}
            </Menu>
        </OutsideClickHandler>
    );
}

export default BurgerMenu
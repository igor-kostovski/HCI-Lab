import React from "react"
import { Link } from "gatsby"

import { slide as Menu } from "react-burger-menu"
import OutsideClickHandler from 'react-outside-click-handler';

import { navigationTabs } from "../../constants"

class BurgerMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen})  
    }

    closeMenu () {
        this.setState({menuOpen: false})
    }

    render() {
        return (
            <OutsideClickHandler onOutsideClick={() => this.closeMenu()}>
                <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} right>
                    {navigationTabs.map(({name, linkTo}) => (
                        <Link onClick={() => this.closeMenu()} to={linkTo} key={name}>
                            <div>{name.toUpperCase()}</div>
                        </Link>
                    ))}
                </Menu>
            </OutsideClickHandler>
        )
    }
}

export default BurgerMenu
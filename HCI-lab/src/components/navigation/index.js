import React, { useContext } from "react"
import { Link } from "gatsby"

import styles from "./style.module.css"
import { navigationContext } from "../../constants/contexts";

const Navigation = ({ navigationTabs }) => {
    var { setActiveTab } = useContext(navigationContext);

    return (
        <div className={styles.navigationContainer}>
            {navigationTabs.map(({ name, linkTo, isComponent, component }) => {
                if (isComponent)
                    return component;
                else
                    return (
                        <Link className={styles.navigationTabContainer}
                            to={linkTo}
                            key={name}
                            activeClassName={styles.activenNavigationTabContainer}
                            onClick={() => setActiveTab(name)}>
                            <div className={styles.navigationTabText}>
                                {name.toUpperCase()}
                            </div>
                        </Link>
                    );
            })}
        </div>
    )
}

export default Navigation
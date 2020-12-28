import React, { useContext } from "react"
import { navigationContext } from '../../constants/contexts';

import styles from "./style.module.css"

const PageTitle = () => {
    var { activeTab } = useContext(navigationContext);
    return (
        <div className={styles.pageTitleContainer}>
            {activeTab}
        </div>
    )
}

export default PageTitle
import React, { createContext, useState } from 'react';
import { navigationTabs, galleryTabs } from '.';

export const navigationContext = createContext({
    activeTab: navigationTabs[0].name,
    setActiveTab: () => { }
});

export const NavigationProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState(navigationTabs[0].name);

    return (
        <navigationContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </navigationContext.Provider>
    )
}
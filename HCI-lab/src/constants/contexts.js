import { createContext } from 'react';
import { navigationTabs } from '.';

export const navigationContext = createContext({
    activeTab: navigationTabs[0].name,
    setActiveTab: () => { }
});
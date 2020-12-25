import { createContext } from 'react';
import { navigationTabs } from '.';

export const navigationContext = createContext(navigationTabs[0].name);
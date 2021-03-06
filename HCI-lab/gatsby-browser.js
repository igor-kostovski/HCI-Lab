/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import React from 'react';
import Layout from "./src/layouts";
import { NavigationProvider } from './src/constants/contexts';
import styles from "./src/global/global.css"

export const wrapPageElement = ({ element }) => {
    return <Layout>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
    return <NavigationProvider>{element}</NavigationProvider>;
}
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
import React from 'react';
import Layout from "./src/layouts";
import { NavigationProvider } from './src/constants/contexts';

export const wrapPageElement = ({ element }) => {
    return <Layout>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
    return <NavigationProvider>{element}</NavigationProvider>;
}
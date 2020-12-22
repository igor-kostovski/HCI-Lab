import React from "react"
import SearchBar from "../components/searchBar";

const onSearchAction = (value) => {
  console.log('searching for ' + value);
}

import Layout from "../layouts"

const BlogPage = () => (
  <Layout>
    <SearchBar action={onSearchAction} />
  </Layout>
)

export default BlogPage
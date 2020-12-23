import React from "react"
import SearchBar from "../components/searchBar";
import Layout from "../layouts"
import Tag from "../components/tag";

const onSearchAction = (value) => {
  console.log('searching for ' + value);
}

const onTagAction = () => {
  console.log('clicked tag');
}

const BlogPage = () => (
  <Layout>
    <SearchBar action={onSearchAction} />
    <Tag title={'Tag'} action={onTagAction} />
  </Layout>
)

export default BlogPage
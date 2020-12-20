import React from "react"
import SearchBar from "../components/searchBar";

const onSearchAction = (value) => {
  console.log('searching for ' + value);
}

const BlogPage = () => (
  <SearchBar action={onSearchAction} />
)

export default BlogPage
import React from "react"
import Layout from "../layouts"
import SearchTagBar from "../components/searchTagBar"
import SeparatorBar from "../components/separatorBar"
import {blogSections} from "../constants"

const onSearchAction = (value) => {
  console.log('searching for ' + value);
}

const onTagAction = () => {
  console.log('clicked tag');
}

const BlogPage = () => (
  <Layout>
    <SeparatorBar text={blogSections.filterSearch} />
      <SearchTagBar tags={[{ title: 'Tag 1' }, { title: 'Tag 2' }, { title: 'Tag 3' }, { title: 'Tag 4' }, { title: 'Tag 5' }]}
        onTagAction={onTagAction}
        onSearchAction={onSearchAction} />
    <SeparatorBar text={blogSections.posts} />
  </Layout>
)

export default BlogPage
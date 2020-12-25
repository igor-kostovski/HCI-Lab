import React from "react"
import Layout from "../layouts"
import SearchTagBar from "../components/searchTagBar";

const onSearchAction = (value) => {
  console.log('searching for ' + value);
}

const onTagAction = () => {
  console.log('clicked tag');
}

const BlogPage = () => (
  <Layout>
    <SearchTagBar tags={[{ title: 'Tag 1' }, { title: 'Tag 2' }, { title: 'Tag 3' }, { title: 'Tag 4' }, { title: 'Tag 5' }]}
      onTagAction={onTagAction}
      onSearchAction={onSearchAction} />
  </Layout>
)

export default BlogPage
import React, { useState } from "react"
import SearchTagBar from "../components/searchTagBar"
import SeparatorBar from "../components/separatorBar"
import { blogSections } from "../constants"
import BlogCard from "../components/blogCard";

import styles from './blog.module.css';

import Pagination from '@material-ui/lab/Pagination';
import { blogPosts, blogTags } from "../constants/mocks";

const POSTS_PER_PAGE = 3;

const BlogPage = () => {

  const [filter, setFilter] = useState(() => (post) => true);
  const [activePosts, setActivePosts] = useState(blogPosts.filter(filter).slice(0, POSTS_PER_PAGE));
  const [tags, setTags] = useState(blogTags);
  const [pageCount, setPageCount] = useState(Math.ceil(blogPosts.length / POSTS_PER_PAGE));

  const onSearchAction = (searchValue) => {
    //this should also use graphql query
    let filter = (post) => searchValue.length === 0 || post.title.includes(searchValue);
    setFilter(() => filter);

    setPageCount(Math.ceil(blogPosts.filter(filter).length / POSTS_PER_PAGE));
    setActivePosts(blogPosts.filter(filter).slice(0, POSTS_PER_PAGE));

    tags.forEach(tag => tag.isActive = false);
    setTags([...tags]);
  }

  const onTagAction = (newTagValue) => {
    //this should also use graphql query
    var index = tags.findIndex(tag => tag.title === newTagValue.title);
    tags.splice(index, 1, newTagValue);

    //let filter = (post) => tags.filter(tag => tag.isActive).every(tag => post.tags.includes(tag.title), filter);
    let filter = (post) => tags.filter(tag => tag.isActive).every(tag => post.tags.includes(tag.title));
    setFilter(() => filter);

    setPageCount(Math.ceil(blogPosts.filter(filter).length / POSTS_PER_PAGE));
    setActivePosts(blogPosts.filter(filter).slice(0, POSTS_PER_PAGE));
    setTags([...tags]);
  }

  const onPageChange = (pageNumber) => {
    //this should also use graphql query with limit/skip parameters instead of blogPosts.slice
    setActivePosts(blogPosts.filter(filter).slice(pageNumber * POSTS_PER_PAGE, (pageNumber + 1) * POSTS_PER_PAGE));
  }

  return (
    <>
      <SeparatorBar text={blogSections.filterSearch} />
      <SearchTagBar tags={tags}
        onTagAction={onTagAction}
        onSearchAction={onSearchAction} />
      <SeparatorBar text={blogSections.posts} />
      <div className={styles.blogContainer}>
        {
          activePosts.length === 0 ?
            <div className={styles.error}>
              <p className={styles.errorMsg}>No items to display!</p>
            </div>
            : activePosts.map((post, index) => <BlogCard key={post.title + post.date + index} post={post} />)}
        <Pagination count={pageCount}
          color='primary'
          variant="outlined"
          className={styles.pagination}
          onChange={(event, number) => onPageChange(number - 1)} />
      </div>
    </>
  );
}

export default BlogPage
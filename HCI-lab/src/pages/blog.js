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
  let filter = (post) => true;

  const [activePosts, setActivePosts] = useState(blogPosts.filter(filter).slice(0, POSTS_PER_PAGE));
  const [tags, setTags] = useState(blogTags);
  const [pageCount, setPageCount] = useState(Math.ceil(blogPosts.length / POSTS_PER_PAGE));

  const onSearchAction = (searchValue) => {
    //this should also use graphql query
    if (searchValue.length === 0)
      filter = (post) => true;
    else
      filter = (post) => post.title.includes(searchValue);

    setPageCount(Math.ceil(blogPosts.filter(filter).length / POSTS_PER_PAGE));
    setActivePosts(blogPosts.filter(filter).slice(0, POSTS_PER_PAGE));

    tags.forEach(tag => tag.isActive = false);
    setTags([...tags]);
  }

  const onTagAction = (value) => {
    //this should also use graphql query
    var index = tags.findIndex(tag => tag.title === value.title);
    tags.splice(index, 1, value);

    if (tags.filter(tag => tag.isActive).length === 0)
      filter = (post) => true;
    else
      filter = (post) => tags.filter(tag => tag.isActive).every(tag => post.tags.includes(tag.title), filter);

    console.log('Inside onTag', tags.filter(tag => tag.isActive), blogPosts.filter(filter));

    setPageCount(Math.ceil(blogPosts.filter(filter).length / POSTS_PER_PAGE));
    setActivePosts(blogPosts.filter(filter).slice(0, POSTS_PER_PAGE));
    setTags([...tags]);
  }

  const onPageChange = (pageNumber) => {
    //this should also use graphql query with limit/skip parameters instead of blogPosts.slice
    console.log('Inside onPage', tags.filter(tag => tag.isActive), blogPosts.filter(filter), filter);
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
        {activePosts.map((post, index) => <BlogCard key={post.title + post.date + index} post={post} />)}
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
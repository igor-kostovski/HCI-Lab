import React, { useState, useEffect } from "react"
import SearchTagBar from "../components/searchTagBar"
import SeparatorBar from "../components/separatorBar"
import { blogSections, contentfulEndpoint } from "../constants"
import BlogCard from "../components/blogCard";

import styles from './blog.module.css';

import Pagination from '@material-ui/lab/Pagination';
import { blogTags } from "../constants/mocks";

const POSTS_PER_PAGE = 3;

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filter, setFilter] = useState(() => (post) => true);
  const [activePosts, setActivePosts] = useState([]);
  const [tags, setTags] = useState([...blogTags]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fetch(contentfulEndpoint(process.env.GATSBY_CONTENTFUL_ACCESS_KEY, process.env.GATSBY_CONTENTFUL_SPACE_ID))
      .then(res => res.json())
      .then(({ items }) => {
        setInitialState(items.map(x => x.fields));
      });
  }, []);

  const setInitialState = (posts) => {
    setActivePosts([...posts].slice(0, POSTS_PER_PAGE));
    setBlogPosts([...posts]);
    setPageCount(Math.ceil(posts.length / POSTS_PER_PAGE))
  }

  const onClearAction = () => {
    let filter = (post) => true;
    setFilter(() => filter);
    setActivePosts(blogPosts.filter(filter).slice(0, POSTS_PER_PAGE));
    setTags([...blogTags]);
    setPageCount(Math.ceil(blogPosts.length / POSTS_PER_PAGE));
    //hacky need to figure out better design for search bar
    document.getElementById('#hackyInput').value = '';
  }

  const onSearchAction = (searchValue) => {
    //this should also use graphql query
    let filter = (post) => searchValue.length === 0 || post.title.toLowerCase().includes(searchValue.toLowerCase());
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
        onSearchAction={onSearchAction}
        onClearAction={onClearAction} />
      <SeparatorBar text={blogSections.posts} />
      <div className={styles.blogContainer}>
        {
          activePosts.length === 0 ?
            <div className={styles.error}>
              <p className={styles.errorMsg}>No items to display!</p>
            </div>
            : activePosts.map((post, index) => {
              let postClass = "post" + index
              return (
                <div className={styles.[postClass]}>
                  <BlogCard imageName={post.imageName}
                    key={post.title + post.date + index}
                    post={post} />
                </div>)
            })}
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
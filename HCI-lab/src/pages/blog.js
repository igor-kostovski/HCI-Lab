import React, { useState, useEffect } from "react"
import SearchTagBar from "../components/searchTagBar"
import SeparatorBar from "../components/separatorBar"
import { blogSections, contentfulEndpoint, images } from "../constants"
import BlogCard from "../components/blogCard";
import Image from "../components/image"
import { makeStyles } from '@material-ui/core/styles';

import styles from './blog.module.css';

import Pagination from '@material-ui/lab/Pagination';
import { blogTags } from "../constants/mocks";

const POSTS_PER_PAGE = 3;

const useStyles = makeStyles({
  root: {
  },
  ul: {
    '& .MuiPaginationItem-root': {
      backgroundColor: 'transparent',
      color: '#ffffff',
      border: "2px solid #ffffff"
    },
    '& .MuiPaginationItem-root:hover': {
      backgroundColor: '#ffffff',
      color: '#000000',
      border: "2px solid #ffffff"
    },
    '& .Mui-selected': {
      backgroundColor: '#ffffff',
      color: '#000000',
      border: "2px solid #ffffff"
    },
  },
});

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filter, setFilter] = useState(() => (post) => true);
  const [activePosts, setActivePosts] = useState([]);
  const [tags, setTags] = useState([...blogTags]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const classes = useStyles();

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
    document.getElementById('hackyInput').value = '';
    setCurrentPage(1);
  }

  const onSearchAction = (searchValue) => {
    let filter = (post) => searchValue.length === 0 || post.title.toLowerCase().includes(searchValue.toLowerCase());
    setFilter(() => filter);

    setPageCount(Math.ceil(blogPosts.filter(filter).length / POSTS_PER_PAGE));
    setActivePosts(blogPosts.filter(filter).slice(0, POSTS_PER_PAGE));

    tags.forEach(tag => tag.isActive = false);
    setTags([...tags]);
    setCurrentPage(1);
  }

  const onTagAction = (newTagValue) => {
    var index = tags.findIndex(tag => tag.title === newTagValue.title);
    tags.splice(index, 1, newTagValue);

    //let filter = (post) => tags.filter(tag => tag.isActive).every(tag => post.tags.includes(tag.title), filter);
    let filter = (post) => tags.filter(tag => tag.isActive).every(tag => post.tags.includes(tag.title));
    setFilter(() => filter);

    setPageCount(Math.ceil(blogPosts.filter(filter).length / POSTS_PER_PAGE));
    setActivePosts(blogPosts.filter(filter).slice(0, POSTS_PER_PAGE));
    setTags([...tags]);
    document.getElementById('hackyInput').value = '';
    setCurrentPage(1);
  }

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
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
            <div className={styles.errorCard}>
              <div className={styles.contentContainer}>
                <div className={styles.imageTitleText}>
                  <div className={styles.image}>
                    <Image name={images.noItems} />
                  </div>
                  <div className={styles.container}>
                    <p>No blog post matching your filter were found!</p>
                  </div>
                </div>
              </div>
            </div>
            : activePosts.map((post, index) => {
              let postClass = "post" + index
              return (
                <div key={index} className={styles.[postClass]}>
                  <BlogCard imageName={post.imageName}
                    key={post.title + post.date + index}
                    post={post} />
                </div>)
            })}
        <div className={styles.pagination}>
          <Pagination count={pageCount}
            classes={{
              root: classes.root,
              ul: classes.ul,
            }}
            page={currentPage}
            color='standard'
            variant="outlined"
            onChange={(event, number) => onPageChange(number - 1)} />
        </div>
      </div>
    </>
  );
}

export default BlogPage
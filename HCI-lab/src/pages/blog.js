import React, { useState } from "react"
import SearchTagBar from "../components/searchTagBar"
import SeparatorBar from "../components/separatorBar"
import { blogSections, images } from "../constants"
import BlogCard from "../components/blogCard";
import Image from "../components/image"

import styles from './blog.module.css';

import Pagination from '@material-ui/lab/Pagination';
import { blogPosts, blogTags } from "../constants/mocks";

const POSTS_PER_PAGE = 3;

const BlogPage = () => {
  const [filter, setFilter] = useState(() => (post) => true);
  const [activePosts, setActivePosts] = useState(blogPosts.filter(filter).slice(0, POSTS_PER_PAGE));
  const [tags, setTags] = useState([...blogTags]);
  const [pageCount, setPageCount] = useState(Math.ceil(blogPosts.length / POSTS_PER_PAGE));
  const [currentPage, setCurrentPage] = useState(1)

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
                  <BlogCard imageName={[images.zlatniRat, images.krknjasi, images.nightImage][index % 3]}
                    key={post.title + post.date + index}
                    post={post} />
                </div>)
            })}
        <Pagination count={pageCount}
          page={currentPage}
          color='standard'
          variant="outlined"
          className={styles.pagination}
          onChange={(event, number) => onPageChange(number - 1)} />
      </div>
    </>
  );
}

export default BlogPage
import React, { useState } from "react"
import SearchTagBar from "../components/searchTagBar"
import SeparatorBar from "../components/separatorBar"
import { blogSections } from "../constants"
import BlogCard from "../components/blogCard";

import styles from './blog.module.css';

import Pagination from '@material-ui/lab/Pagination';

const PAGE_COUNT = 3;

const post = {
  title: 'Blog post title',
  date: '03 jan 2021',
  link: 'http://www.hrvatski-plivacki-savez.hr/Sadrzaj/Home.php?id=Hom&lang=Hrv',
  text: 'The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.',
  tags: []
};

const posts = () => {
  var posts = [];
  for (let i = 0; i < 12; i++) {
    let newPost = { ...post, tags: [] };
    newPost.title += i
    newPost.tags.push(i % 2 === 0 ? 'Blog1' : 'Post2');
    posts.push(newPost);
  }
  return posts;
};

let filter = (post) => true;

const BlogPage = () => {
  const [activePosts, setActivePosts] = useState(posts().filter(filter).slice(0, PAGE_COUNT));
  const [tags, setTags] = useState([{ title: 'Blog1', isActive: false }, { title: 'Post1', isActive: false }, { title: 'Blog2', isActive: false }, { title: 'Post2', isActive: false }, { title: 'Blog3', isActive: false }]);
  const [pageCount, setPageCount] = useState(posts().length / PAGE_COUNT);

  const onSearchAction = (value) => {
    //this should also use graphql query
    console.log('searching for ' + value);
  }

  const onTagAction = (value) => {
    //this should also use graphql query
    let newTags = [...tags.filter(tag => tag.title !== value.title), value];

    setTags(newTags);
    if (newTags.filter(tag => tag.isActive).length === 0)
      filter = (post) => true;
    else
      filter = (post) => newTags.filter(tag => tag.isActive).every(tag => post.tags.includes(tag.title));

    setPageCount(posts().filter(filter).length / PAGE_COUNT);
    setActivePosts(posts().filter(filter).slice(0, PAGE_COUNT));
  }

  const onPageChange = (pageNumber) => {
    //this should also use graphql query with limit/skip parameters instead of posts().slice
    setActivePosts(posts().filter(filter).slice(pageNumber * PAGE_COUNT, (pageNumber + 1) * PAGE_COUNT));
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
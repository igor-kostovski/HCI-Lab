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
  subtitle: 'Blog post subtitle',
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
    newPost.tags.push(i % 2 === 0 ? 'Blog' : 'Post');
    posts.push(newPost);
  }
  return posts;
};

let filter = (post) => true;

const BlogPage = () => {
  const [activePosts, setActivePosts] = useState(posts().slice(0, PAGE_COUNT));
  const [activeTags, setActiveTags] = useState(['Blog']);

  const onSearchAction = (value) => {
    //this should also use graphql query
    console.log('searching for ' + value);
  }

  const onTagAction = (value) => {
    //this should also use graphql query
    console.log('clicked tag');
    setActiveTags([...activeTags, value]);
    if (activeTags.length == 0)
      filter = (post) => true;
    else
      filter = (post) => activeTags.every(tag => post.tags.includes(tag));
  }

  const onPageChange = (pageNumber) => {
    //this should also use graphql query with limit/skip parameters instead of posts().slice
    setActivePosts(posts().filter(filter).slice(pageNumber * PAGE_COUNT, (pageNumber + 1) * PAGE_COUNT));
  }

  return (
    <>
      <SeparatorBar text={blogSections.filterSearch} />
      <SearchTagBar tags={[{ title: 'Tag 1' }, { title: 'Tag 2' }, { title: 'Tag 3' }, { title: 'Tag 4' }, { title: 'Tag 5' }]}
        onTagAction={onTagAction}
        onSearchAction={onSearchAction} />
      <SeparatorBar text={blogSections.posts} />
      <div className={styles.blogContainer}>
        {activePosts.map((post, index) => <BlogCard key={post.title + post.date + index} post={post} />)}
        <Pagination count={4}
          color='primary'
          variant="outlined"
          className={styles.pagination}
          onChange={(event, number) => onPageChange(number - 1)} />
      </div>
    </>
  );
}

export default BlogPage
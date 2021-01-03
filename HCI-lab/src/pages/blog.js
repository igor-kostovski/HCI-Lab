import React from "react"
import SearchTagBar from "../components/searchTagBar"
import SeparatorBar from "../components/separatorBar"
import { blogSections } from "../constants"
import BlogCard from "../components/blogCard";

import styles from './blog.module.css';

import Pagination from '@material-ui/lab/Pagination';

const onSearchAction = (value) => {
  console.log('searching for ' + value);
}

const onTagAction = () => {
  console.log('clicked tag');
}

const BlogPage = () => (
  <>
    <SeparatorBar text={blogSections.filterSearch} />
    <SearchTagBar tags={[{ title: 'Tag 1' }, { title: 'Tag 2' }, { title: 'Tag 3' }, { title: 'Tag 4' }, { title: 'Tag 5' }]}
      onTagAction={onTagAction}
      onSearchAction={onSearchAction} />
    <SeparatorBar text={blogSections.posts} />
    <div className={styles.blogContainer}>
      <BlogCard post={
        {
          title: 'Blog post title',
          subtitle: 'Blog post subtitle',
          date: '03 jan 2021',
          link: 'http://www.hrvatski-plivacki-savez.hr/Sadrzaj/Home.php?id=Hom&lang=Hrv',
          text: 'The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.',
          tags: ['Blog', 'Post']
        }} />
      <BlogCard post={
        {
          title: 'Blog post title',
          subtitle: 'Blog post subtitle',
          date: '03 jan 2021',
          link: 'http://www.hrvatski-plivacki-savez.hr/Sadrzaj/Home.php?id=Hom&lang=Hrv',
          text: 'The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.',
          tags: ['Blog', 'Post']
        }
      } />
      <BlogCard post={
        {
          title: 'Blog post title',
          subtitle: 'Blog post subtitle',
          date: '03 jan 2021',
          link: 'http://www.hrvatski-plivacki-savez.hr/Sadrzaj/Home.php?id=Hom&lang=Hrv',
          text: 'The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.',
          tags: ['Blog', 'Post']
        }
      } />
      <Pagination count={5}
        color='primary'
        variant="outlined"
        className={styles.pagination} />
    </div>
  </>
)

export default BlogPage
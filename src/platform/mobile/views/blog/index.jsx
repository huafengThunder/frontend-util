import React, { useRef, useEffect } from 'react'
import classNames from 'classnames'
import styles from './index.module.less'
const blogUrls = []
const blogFiles = require
  .context('../../../../static/blog', true, /\.md$/)
  .keys()
  .map((i) => {
    blogUrls.push(i.replace(/\.\//, '').replace(/.md$/, ''))
    return require('../../../../static/blog' + i.replace(/\.\//, '/'))
  })
function Blog() {
  const mdRender = useRef(null)
  const lastBlog = blogFiles[blogFiles.length - 1].default
  useEffect(() => {
    if (mdRender.current) {
      mdRender.current.innerHTML = lastBlog
    }
  }, []);
  return (
    <section className={styles.blog}>
      <div
        className={classNames('markdown-body', styles.blogContent)}
        ref={mdRender}
        style={{ backgroundColor: 'white' }}
      ></div>
    </section>
  )
}
export default Blog

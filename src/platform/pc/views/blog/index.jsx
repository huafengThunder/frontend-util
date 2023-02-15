import React, { useRef, useEffect } from 'react'
import marked from '@/utils/marked'
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
function Layout() {
  const mdRender = useRef(null)
  useEffect(() => {
    mdRender.current.innerHTML = marked(blogFiles[blogFiles.length - 1].default)
  }, [])
  return (
    <div className={styles.blog}>
      <aside className={styles.blogMenu}>
        <ul>
          {blogUrls.map((item) => (
            <li key={item}>
              <h1>{blogUrls[blogUrls.length - 1]}</h1>
            </li>
          ))}
        </ul>
      </aside>
      <div
        className={classNames('markdown-body', styles.blogContent)}
        ref={mdRender}
        style={{ backgroundColor: 'white' }}
      ></div>
    </div>
  )
}
export default Layout

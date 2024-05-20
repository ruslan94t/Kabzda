import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'




export default function MyPosts() {
  return (
 
    <div>
      My Post 
      <div>
        <textarea></textarea>
        <button>Add Post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
       <Post />
       <Post />
       <Post />
      </div>
    </div>

  )
}

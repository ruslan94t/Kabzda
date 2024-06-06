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
       <Post message="Hi how are you" />
       <Post message="its My first post" />
       <Post message="follow white rabit"/>
      </div>
    </div>

  )
}

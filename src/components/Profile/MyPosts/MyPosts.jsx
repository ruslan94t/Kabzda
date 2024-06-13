import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'




export default function MyPosts(props) {




  let postsElements = [
props.state.posts.map((post)=>(
  <Post message={post.post} />
))
  ]
  return (
 
    <div className={s.postsBlock}>
    <h3>  My Post </h3>
      <div>
        <div><textarea></textarea></div>
       <div> <button>Add Post</button></div>
       <div><button>Remove</button></div>
      </div>
      <div className={s.posts}>
      
      {postsElements}
      </div>
    </div>

  )
}

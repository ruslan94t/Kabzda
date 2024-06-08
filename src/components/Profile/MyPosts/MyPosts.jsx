import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'




export default function MyPosts() {





  let postsData = [
    {post:'Where my many ' },
    {post:'Say my Name'},
    {post:'You Haisenberg'}
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
       <Post message={postsData[0].post} />
       <Post message={postsData[1].post} />
       <Post message={postsData[2].post}/>
      </div>
    </div>

  )
}

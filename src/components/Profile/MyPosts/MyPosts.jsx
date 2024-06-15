import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'




export default function MyPosts(props) {




  let postsElements =props.state.posts.map((post)=>(<Post message={post.post} />))

let newPostElement = React.createRef()
let addPost =()=>{

let text = newPostElement.current.value;

props.addPost(text);
}



  return (
 
    <div className={s.postsBlock}>
    <h3>  My Post </h3>
      <div>
        <div><textarea ref={newPostElement}></textarea></div>
       <div> <button onClick={addPost}>Add Post</button></div>
       <div><button>Remove</button></div>
      </div>
      <div className={s.posts}>
      
      {postsElements}
      </div>
    </div>

  )
}

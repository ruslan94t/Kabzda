import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state'




export default function MyPosts(props) {




  let postsElements =props.state.posts.map((post)=>(<Post message={post.post} />))
let newPostText = props.state.newPostText;
console.log(newPostText)
let newPostElement = React.createRef()
let addPost =()=>{

props.dispatch(addPostActionCreator());

}
const onPostChange =()=>{
  let newText = newPostElement.current.value;
  props.dispatch(updateNewPostTextActionCreator(newText))
}



  return (
 
    <div className={s.postsBlock}>
    <h3>  My Post </h3>
      <div>
        <div><textarea
        onChange={onPostChange}
        value={newPostText}
        ref={newPostElement}></textarea></div>
       <div> <button onClick={addPost}>Add Post</button></div>
       <div><button>Remove</button></div>
      </div>
      <div className={s.posts}>
      
      {postsElements}
      </div>
    </div>

  )
}

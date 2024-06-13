import React from 'react'
import MyPosts from './MyPosts/MyPosts'




import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
export default function Profile(props) {
  return (
    <div className={s.content}>
   
    <ProfileInfo />
     <MyPosts  state={props.state} />
   
  </div>
  )
}

import React from 'react'
import MyPosts from './MyPosts/MyPosts'




import s from './Profile.module.css'
export default function Profile() {
  return (
    <div className={s.content}>
    <div>
    <img src="https://c0.wallpaperflare.com/preview/282/489/126/beach-exotic-holiday-horizon.jpg" />
    </div>
    <div> ava + descriptio</div>
  
     <MyPosts />
   
    
  </div>
  )
}

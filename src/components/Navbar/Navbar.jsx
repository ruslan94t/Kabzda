import React from 'react'
import s from './Navbar.module.css'
export default function Navbar() {
  return (
    <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <a href='/profile'>Profile</a>
          </div>
        <div className={s.item}>
          <a href='message'>Messages</a>
          </div>
        <div className={s.item}>
          <a href='news'>News</a>
          </div>
        <div className={s.item}>
          <a href='music'>Music</a>
          </div>
        <div className={s.item}>
          <a href='settings'>Settings</a>
          </div>
      </nav>
  )
}

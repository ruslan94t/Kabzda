import React from 'react'
import s from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'






export default function Navbar() {
  return (
    <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <NavLink activeClassName={s.active} to='/profile'>Profile</NavLink>
          </div>
          <div className={s.item}>
          <NavLink activeClassName={s.active} to='dialogs'>Dialogs</NavLink>
          </div>
        <div className={s.item}>
          <NavLink activeClassName={s.active}  to='message'>Messages</NavLink>
          </div>
        <div className={s.item}>
          <NavLink activeClassName={s.active} to='news'>News</NavLink>
          </div>
        <div className={s.item}>
          <NavLink activeClassName={s.active} to='music'>Music</NavLink>
          </div>
        <div className={s.item}>
          <NavLink activeClassName={s.active} to='settings'>Settings</NavLink>
          </div>
      </nav>
  )
}

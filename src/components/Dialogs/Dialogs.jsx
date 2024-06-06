import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'


export default function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
      <div className={s.dialog+' '+s.active}>
        <NavLink to="/dialogs/1">Dimych</NavLink>
          
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/2">Sveta</NavLink>
          
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/3"> Sasha</NavLink>
         
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/4">Valera</NavLink>
          
        </div>
        <div className={s.dialog}>
        <NavLink to="/dialogs/5"> Andrey</NavLink>
         
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>hi</div>
        <div className={s.message}>It kama</div>
        <div className={s.message}>Yo You</div>
      </div>

    </div>
  )
}

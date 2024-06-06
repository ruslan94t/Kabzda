import React from 'react'
import s from './Dialogs.module.css'



export default function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
      <div className={s.dialog+' '+s.active}>
          Dimych
        </div>
        <div className={s.dialog}>
          Sveta
        </div>
        <div className={s.dialog}>
          Sasha
        </div>
        <div className={s.dialog}>
          Valera
        </div>
        <div className={s.dialog}>
          Andrey
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

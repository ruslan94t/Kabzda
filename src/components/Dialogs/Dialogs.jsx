import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Messages';






export default function Dialogs(props) {


let dialogsElements = [
 props.state.dialogs.map((dialog)=>(
  <DialogItem  name={dialog.name} id={dialog.id}/>
  
 ))
]

let messageElements = [
  props.state.messages.map((item)=>(
    <Message message={item.name} />
   
  ))
 ]


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
     
      </div>
      <div className={s.messages}>
       {messageElements}
       
       
      </div>

    </div>
  )
}

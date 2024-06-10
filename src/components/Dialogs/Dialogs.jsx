import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'





const DialogItem = (props)=>{
  let path = "/dialogs/"+props.id;
  return(
   
    <div className={s.dialog+' '+s.active}>
    <NavLink to={path}>{props.name}</NavLink>
      
    </div>
  )
}

const Message = (props)=>{
return  <div className={s.message}>{props.message}</div>
}




export default function Dialogs() {


let dialogsData = [
  {id:1, name:'Ruslan'},
  {id:2, name:'Nastya'},
  {id:3, name:"Juliya"},
  {id:4, name:"Osman"}
];

let messagesData = [
  {id:1, name:'Hellow '},
  {id:2, name:'Yo'},
  {id:3, name:'Yo Yo, its'}
]

let dialogsElements = [
 dialogsData.map((dialog)=>(
  <DialogItem  name={dialog.name} id={dialog.id}/>
  
 ))
]

let messageElements = [
  messagesData.map((item)=>(
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

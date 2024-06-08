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
  {id:3, name:'Yo Yo'}
]





  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
      <DialogItem  name={dialogsData[0].name} id={dialogsData[0].id}/>
      <DialogItem  name={dialogsData[1].name} id={dialogsData[1].id}/>
     
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].name} />
        <Message message={messagesData[1].name} />
       
       
      </div>

    </div>
  )
}

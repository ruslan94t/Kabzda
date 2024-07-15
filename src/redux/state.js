

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';




let store ={
  _state :{


    profilePage:{
        posts:[
            {post:'Where my many ', id:1, likeCount:9 },
            {post:'Say my Name', id:3, likeCount:22},
            {post:'You Haisenberg', id:3, likeCount:1}
          ],
          newPostText:'It Samuray',
    },
    dialogsPage:{
        dialogs:[
            {id:1, name:'Ruslan'},
            {id:2, name:'Nastya'},
            {id:3, name:"Juliya"},
            {id:4, name:"Osman"}
          ],
          messages:[
            {id:1, name:'Hellow '},
            {id:2, name:'Yo'},
            {id:3, name:'Yo Yo, its'}
          ]
    },

 

},
getState(){
return this._state;
},
_callSubscriber (){
  console.log('state change')
},

subscribe (observer){
  this._callSubscriber =observer;
  },

dispatch(action){
if(action.type === ADD_POST){

  let newMessage={
    post:this._state.profilePage.newPostText, 
    id:5, 
    likeCount:1,
  }
  this._state.profilePage.posts.push(newMessage);
  this._state.newPostText='';
  this._callSubscriber(this._state);

}
else if(action.type ===UPDATE_NEW_POST_TEXT){
  this._state.profilePage.newPostText=action.newText;
  this._callSubscriber(this._state)
}
},  

}
export const addPostActionCreator =()=>{
  return {type:ADD_POST}
}

export const updateNewPostTextActionCreator = (newText)=>{
  return {type:UPDATE_NEW_POST_TEXT, newText}
}





export default store;
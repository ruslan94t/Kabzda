

let state ={


    profilePage:{
        posts:[
            {post:'Where my many ', id:1, likeCount:9 },
            {post:'Say my Name', id:3, likeCount:22},
            {post:'You Haisenberg', id:3, likeCount:1}
          ],
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

 

};

export let addPost = (postMessage)=>{

  let newMessage={
    post:postMessage, id:5, likeCount:1
  }
  state.profilePage.posts.push(newMessage)
}
export default state;
import { createSlice } from "@reduxjs/toolkit";

const data =[
    {
      id: 1,
      name : 'Nareman Rh' ,
      position : 'front end ' ,
      password : '12345678' ,
      role : 'admin'
    },
    {
      id: 2,
      name : 'Nara Lm' ,
      position : 'ui ux ',
      password : '87654321' ,
      role : 'employee'
    },
    {
      id: 3,
      name : 'Mais Kn' ,
      position : 'flutter ',
      password : '1234567' ,
       role : 'employee'
    },
    {
      id: 4,
      name : 'Karam Bj' ,
      position : 'back end ',
      password : '12345678' ,
       role : 'employee'
    },
    {
      id: 5,
      name : 'Yaman' ,
      position : 'back end ',
      password : '12345678' ,
       role : 'employee'
    },

  ]

const userSlice = createSlice({
    name : 'users' ,
    initialState : data ,
    reducers :{
       addUser : (state , action ) =>{
        state.push(action.payload)
       },
       updateUser: (state, action) => {
        const{id ,name ,password , position} = action.payload;
        const u = state.find(user => user.id == id);
        if(u){
          u.name = name ;
          u.position = position ;
          u.password = password
        }
      },
      deleteUser : (state , action ) =>{
        const{id} = action.payload;
        const u = state.find(user => user.id == id);
        if(u){
          return state.filter(f => f.id !== id);
        }
       },
    }
});


export const{ addUser, updateUser , deleteUser } = userSlice.actions;

export default userSlice.reducer
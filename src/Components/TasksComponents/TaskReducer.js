import { createSlice } from "@reduxjs/toolkit";

const data =[
    {
        id : 1,
        taskName : 'E_commerce',
        type : 'Dashboard',
        des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        startDate: '12/5/2024',
        endtDate: '5/7/2024' ,
        stat : 'Complited',
        user : [
            {
            id : 1,
            name : 'NR'
        },
        {
            id : 2,
            name : 'NL'
        },
        {
            id : 3,
            name : 'ML'
        },

    ]
    },
    {
        id : 2,
        taskName : 'Resturant',
        type : 'Mobile App',
        des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        startDate: '12/5/2024',
        endtDate: '5/7/2024',
        stat : 'Complited',
        user : [
            {
            id : 1,
            name : 'KB'
        },
        {
            id : 2,
            name : 'NR'
        },

    ]
    },
    {
        id : 3,
        taskName : 'Test',
        type : 'Website',
        des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        startDate: '12/5/2024',
        endtDate: '5/7/2024',
        stat : 'In Progrees',
        user : [
            {
            id : 1,
            name : 'KL'
        },

    ]
    },
    {
        id : 4,
        taskName : 'Delivery',
        type : 'Mobile App && Dashboard',
        des : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        startDate: '12/5/2024',
        stat : 'In Progrees',
        endtDate: '5/7/2024',
        user : [
            {
            id : 1,
            name : 'NR'
        },
        {
            id : 2,
            name : 'NL'
        },
        {
            id : 3,
            name : 'MK'
        },

    ]
    },
]

const taskSlice = createSlice({
    name : 'tasks' ,
    initialState : data ,
    reducers :{
       addTask : (state , action ) =>{
        state.push(action.payload)
       },
       updateTask: (state, action) => {
        const{id ,taskName , type , stat , des , startDate , endtDate} = action.payload;
        const t = state.find(task => task.id == id);
        if(t){
          t.taskName = taskName ;
          t.type = type ;
          t.des = des ;
          t.startDate = startDate ;
          t.endtDate = endtDate ;
          t.stat = stat
        }
      },
        deleteTask : (state , action ) =>{
            const{id} = action.payload;
            const t = state.find(task => task.id == id);
            if(t){
              return state.filter(f => f.id !== id);
            }
       },
       
    }
});


export const{ addTask , updateTask, deleteTask} = taskSlice.actions;

export default taskSlice.reducer
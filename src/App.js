import { Route, Routes} from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Auth/Login';
import Team from './Pages/Team/Team';
import Tasks from './Pages/Tasks/Tasks';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./Components/UserComponents/UserReducer";
import EditTeam from './Pages/Team/EditTeam';
import taskReducer  from './Components/TasksComponents/TaskReducer'
import trashReducer from './Components/TrashComponents/TrashReducer' ;
import EditTask from './Pages/Tasks/EditTask';
import ComplitedTasks from './Pages/Tasks/ComplitedTasks';
import InProgreesTask from './Pages/Tasks/InProgreesTask';
import Setting from './Pages/Setting/Setting';


function App() {

  const store = configureStore({
    reducer :{
      users : userReducer ,
      tasks: taskReducer ,
      trash : trashReducer 
    }
  })

  return (
    <>
    <Provider store={store}>
    <Routes>
        <Route index element={<Login/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='team' element={<Team/>}/>
        <Route path='edit/:id' element={<EditTeam/>}/>
        <Route path='tasks' element={<Tasks/>}/>
        <Route path='edittask/:taskName' element={<EditTask/>}/>
        <Route path='complitedtasks' element={<ComplitedTasks/>}/>
        <Route path='inprogreestasks' element={<InProgreesTask/>}/>
        <Route path='setting' element={<Setting/>}/>
    </Routes>
    </Provider>
    </>
    
  );
}

export default App;

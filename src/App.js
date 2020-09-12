import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './component/TextInput';
import { addTodo, deleteTodo, getAllTodos , onEditTodo } from './services/services';
import Spinner from './component/Spinner';

function App() {
  const [allData,setAllData] = useState([]);
  const [isError,setError]=useState(false);
  const [isLoading,setIsLoading]=useState(true);
  const [todo,setTodo]=useState('');
  const [order,setOrder]=useState('');
  useEffect(()=>{
    getAllTodos()
    .then((success)=>{
      let getSortedData = success.sort(function(a, b){return a.order-b.order});
      debugger;
      setAllData(getSortedData);
      setIsLoading(false)
    })
  },[])
  const onDeleteTodo =(id)=>{
    deleteTodo(id)
    .then((success)=>{
      let getFilteredList = allData.filter((item)=> item.id !== id);
      setAllData(getFilteredList);
      debugger;
    }).catch((error)=>{
      debugger;
    })
  }
  const onAddTodo =()=>{
   if(todo !== '' && order !== ''){
     addTodo({title:todo,order})
     .then((success)=>{
       setAllData((prev)=>[...prev,{title:todo,order,completed:false}].sort(function(a, b){return a.order-b.order}))

       setError(false)
       setTodo('');
       setOrder('')
      }).catch((error)=>{
        debugger;
      })
    }else{
      setError(true)
    }
  }
  const onEditClick=(id,completed)=>{
    onEditTodo({id,completed})
    .then((success)=>{
      let getCloneData = [...allData];
      let getTodoIndex = getCloneData.findIndex((item)=> item.id == id);
      getCloneData[getTodoIndex]['completed']=true;
      setAllData(getCloneData)
      debugger
    }).catch((error)=>{
      debugger;
    })
  }
  return (
    <div>
      <div class="jumbotron">
      <h1 class="display-4">TODO APP</h1> 
    </div>
    <div>
    <div class="input-group mx-auto w-25">
  {isError ? <p className='text-danger' >Field Required</p> : '' }
    <div class="input-group">
  
  <input value={todo} onChange={(e)=>setTodo(e.target.value)}  placeholder='Enter Todo' type="text" class="form-control" />
  <input value={order} onChange={(e)=>setOrder(e.target.value)} placeholder='Enter Order' type="text" class="form-control" />
  <div class="input-group-append">
  <button onClick={onAddTodo}  class="btn btn-outline-secondary" type="button">Todo</button>
  <br />
  </div>
</div>     
</div>
<br />
<br />
  <div className='mx-auto w-50' >

  {
    isLoading ? 
    <p className='text-center' >  

    Loading...
    </p>
     : <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Todo</th>
        <th scope="col">Order</th>
        <th scope="col">Complete</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      
      {
        allData && allData
        .map((item,index)=>(
          <tr>
            <td>
  {index+1}
            </td>
            <td>
          {item.title}
            </td>
            <td>
          {item.order}
            </td>
            <td>
          {item.completed ? 'Yes' : 'No'}
            </td>
            <td>
          <i style={{marginRight:9}} onClick={()=>onDeleteTodo(item.id)} className='fas fa-trash' ></i>

          
          <i onClick={()=>onEditClick(item.id,true)} className='fas fa-pen' ></i> 
            </td>
          </tr>
        ))
      }
      <tr>
      </tr>
    </tbody>
  </table> 
  }
  </div>
    </div>
    </div>
  );
}

export default App;

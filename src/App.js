import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './component/TextInput';
import { getAllTodos } from './services/services';

function App() {
  const [allData,setAllData] = useState([]);
  useEffect(()=>{
    getAllTodos()
    .then((success)=>{
      setAllData(success);
    })
  },[])
  return (
    <div>
      <div class="jumbotron">
      <h1 class="display-4">TODO APP</h1> 
    </div>
    <div>
    <div class="input-group mx-auto w-25">
  <TextInput placeholder={'Enter Todo'}  /> 
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Todo</button>
  </div>
</div>
<br />
<br />
  <div className='mx-auto w-50' >

  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Todo</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      allData && allData.map((item,index)=>(
        <tr>
          <td>
{index+1}
          </td>
          <td>
        {item.title}
          </td>
          <td>
        <i className='fas fa-trash' ></i> 
          </td>
        </tr>
      ))
    }
    <tr>

    </tr>
  </tbody>
</table>
  </div>
    </div>
    </div>
  );
}

export default App;

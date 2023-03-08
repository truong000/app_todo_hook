import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import Todo from './components/Todo';


function App(props: any) {

  const [tasks, setItems] = useState(props.tasks);
  const [showForm, setShowForm] = useState(false);

  useEffect(() =>{
    
  })

  function addItem(name: any, level: any) {
    const newTask = { id: `todo-${nanoid()}`, name, level: level };
    setItems([...tasks, newTask]);
    console.log(newTask);
  }

  function deleteItem(id: any) {
    const remainingItems = tasks.filter((task: any) => id !== task.id);
    setItems(remainingItems);
    console.log(remainingItems);
  }

  function editItem(id: any, newName: any, newLevel: any) {
    const editItemList = tasks.map((task: any) => {
      if (id === task.id) {
        return { ...task, name: newName, level: newLevel }
      }
      return task;
    });
    setItems(editItemList);
  }

  const taskList = tasks.map((task: any, index: number) => {
    return    (    
    <Todo
      index={index + 1}
      id={task.id}
      name={task.name}
      level={task.level}
      content={task.content}
      key={task.id}
      deleteItem={deleteItem}
      editItem={editItem}
    />
  )})

  return (
    <div className="container">
      <div className="page-header">
        <h1>Project 01 - ToDo List <small>ReactJS</small></h1>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          {/* <div className="input-group">
            <input type="text" className="form-control" placeholder="Search item name" />
            <span className="input-group-btn">
              <button className="btn btn-info" type="button">Clear</button>
            </span>
          </div> */}
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          {/* {filterList} */}
        </div>
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <button type="button" className="btn btn-info btn-block marginB10" onClick={() => setShowForm(!showForm)}>{(showForm) ? 'Close Item' : 'Add Item'}</button>
        </div>
      </div>
      <div className="row marginB10">
        <div className="col-md-offset-7 col-md-5">
          {showForm && <Form
            addTask={addItem}
          />}
        </div>
      </div>
      <div className="panel panel-success">
        <div className="panel-heading">List Item</div>
        <table className="table table-hover ">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th>Name</th>
              <th className="text-center">Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {taskList}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

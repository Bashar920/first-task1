import {React,useState,Component} from 'react'
import ToDo from '../ToDo/ToDo.jsx';
export class ToDoList extends Component {
    task= ["Play Sport","Stady","Reading Book"];
  render() {
    return (
      <div>
        <h1 className='title'>
            Tasks
        </h1>
        <div className="tasks">
            {
            this.task.map((ele,index)=>{
                return(
                    <ToDo taskName={ele}key={index}/>
                )
            })
            }
        </div>
    </div>
    )
  }
}

export default ToDoList
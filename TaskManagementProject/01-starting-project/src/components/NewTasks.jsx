import { useState } from "react";
export default function NewTasks({onAdd}){
    const [enteredTask,setEnteredTask]=useState('');
    function handleChange(event){
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        if(enteredTask.trim()===''){
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }
    return (
        <div className="flex items-center gap-4">
            <input type='text' onChange={handleChange}
             value={enteredTask}
             className="w-64 px-2 py-2 rounded-md bg-stone-400 font-medium text-stone-900" />
            <button onClick={handleClick} className="py-1 px-1 rounded-md font-semibold text-stone-50 hover:bg-stone-950 bg-neutral-600">Add Task</button>
        </div>
    );
}
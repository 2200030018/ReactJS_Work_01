import Input from "./Input.jsx";
import { useRef } from "react";
import Model from "./Model.jsx";

export default function NewProject({onAdd, onCancel}){
    const model=useRef();
    const title=useRef();
    const description=useRef();
    const duedate=useRef();
    function handleSave(){
        const enteredTitle=title.current.value;
        const enteredDescription=description.current.value;
        const enteredDueDate=duedate.current.value;
        
        //validation part
        if(enteredTitle.trim()==='' || enteredDescription.trim()===''|| enteredDueDate.trim()===''){
            model.current.open();
            return;
        }
        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate
        })

    }
    return (
        <>
        <Model ref={model} buttonCaption="Close">
            <h2 className='text-xl font-bold text-stone-700 my-4 '>Invalid Data Entered</h2>
            <p className='text-stone-600 mb-4'>Oops... looks like you forgot to enter a value. </p>
            <p className='text-stone-600 mb-4'>Please enter the correct Data</p>
        </Model>
        <div className="w-[50rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button onClick={onCancel}
                    className="px-6 py-2 rounded-lg text-stone-950 hover:text-stone-50 hover:bg-stone-600 bg-stone-400">Cancel</button> 
                </li>
                <li><button onClick={handleSave}
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-400 hover:text-stone-950">Save</button> </li>
            </menu>
            <div>
                <Input type="text" ref={title} lable="Title"/>
                <Input ref={description} lable="Description" textarea/>
                <Input type="date" ref={duedate} lable="Due Date"/>
            </div>
        </div>
        </>

    );
}
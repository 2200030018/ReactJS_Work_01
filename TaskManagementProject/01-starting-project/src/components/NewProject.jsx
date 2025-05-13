import Input from "./Input.jsx";
import { useRef } from "react";

export default function NewProject({onAdd}){
    const title=useRef();
    const description=useRef();
    const duedate=useRef();
    function handleSave(){
        const enteredTitle=title.current.value;
        const enteredDescription=description.current.value;
        const enteredDueDate=duedate.current.value;
        
        //validation part
        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate
        })

    }
    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950 ">Cancel</button> 
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

    );
}
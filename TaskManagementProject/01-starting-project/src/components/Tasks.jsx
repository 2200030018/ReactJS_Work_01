import NewTasks from "./NewTasks.jsx";

export default function Tasks({tasks,onAdd,onDelete,selected}){
    const showTasks=tasks.filter(task=>task.projectId===selected) ;
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTasks onAdd={onAdd}/>
            {showTasks.length ===0 && <p className="text-stone-800 mb-4">This Project does not have any tasks yet.</p>}
            {showTasks.length>0 &&
                <ul className="p-4 mt-8 bg-gray-400 rounded-md">
                    {showTasks.map((task)=>(
                        <li key={task.id} className="flex justify-between my-4">   
                            <span className="font-semibold ">{task.text}</span>
                            <button className="py-1 px-2 rounded-md text-stone-200 hover:text-stone-100 hover:bg-stone-600 bg-stone-900" onClick={()=>onDelete(task.id)}>Clear</button>    
                        </li>
                    )

                    )}
                </ul>
            }
        </section>
    );

}
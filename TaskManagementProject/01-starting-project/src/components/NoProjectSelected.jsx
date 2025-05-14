import noProjectImage from '../assets/no-projects.png';
import Button from './Button.jsx';
export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImage} alt='An Empty task list' className='w-28 h-28 object-contain mx-auto'/>
            <h2 className='text-3xl font-bold text-stone-500 my-4 '>No Project Selected</h2>
            <p className='text-stone-400 mb-4 text-xl'>Select a Project or get started with a new one</p>
            <p className='mt-8 '>
                <Button onClick={onStartAddProject}>Create new Project</Button>
            </p>
        </div>
    );
}
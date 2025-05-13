import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState]=useState({
    selectedProjectId: undefined,
    projects:[]
  });

  function handleStartAddProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:null,
      }
    })
  }

  function handleCancelAddProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
      }
    })
  }

  function handleSelectedProject(id){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:id,
      }
    })
  }

  function handleDeleteProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:prevState.projects.filter(project=> project.id!==prevState.selectedProjectId)
      }
    })
  }

  function handleAddProject(projectData){
    setProjectsState(prevState=>{
      const newProject={
        ...projectData,
        id:Math.random()
      };
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects, newProject]
      }
    })
  }

  const selectedProject= projectsState.projects.find(project=>project.id===projectsState.selectedProjectId);

  let content=<SelectedProject project={selectedProject} onDelete={handleDeleteProject}/> ;

  if(projectsState.selectedProjectId===null){
    content=<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>;
  }else if(projectsState.selectedProjectId===undefined){
    content=<NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject}
       projects={projectsState.projects} onSelected={handleSelectedProject} selectedProjectId={projectsState.selectedProjectId}/>
      {content}
    </main>
  );
}

export default App;

import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from "./components/RootLayout.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications.jsx";

const router = createBrowserRouter([
  { path:'/', element:<RootLayout/> ,
    children:[
      {index:true, element:<Home/>},
      {path:'about', element:<About/>},
      {path:'skills',element:<Skills/>},
      {path: 'certifications', element:<Certifications/>}
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;



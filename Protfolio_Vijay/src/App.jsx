import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from "./components/RootLayout.jsx";
import About from "./components/About.jsx";

const router = createBrowserRouter([
  { path:'/', element:<RootLayout/> ,
    children:[
      {index:true, element:<Home/>},
      {path:'about', element:<About/>}
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;



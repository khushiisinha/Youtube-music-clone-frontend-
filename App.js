import Dashboard from "./Dashboard";
import Explore from "./Explore";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Navbar from "./Navbar";
import Body from "./Body";
import ExploreBody from "./ExploreBody";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body/>
    
  },
  {
    path: "/body",
    element: <Body/>
    
  },
  {
    path: "/explore",
    element: <ExploreBody/>
    
  }
  
]);
function App() {
  return (
    <div className=" bg-black flex">
      <Navbar/>
     
       <div>
       <RouterProvider router={router} /> 
       </div>
       
    
    </div>
  );
}

export default App;

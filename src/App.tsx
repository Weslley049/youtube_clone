

import './styles/fonts.css';
import './input.css';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Drawer from './components/Drawer';

import Home from './pages/Home';
import Results from './pages/Results';
import { Watch } from './pages/Watch';

const router = createBrowserRouter([
  
    {
			path: '/',
			element: <Drawer />,	
      children: [
        {
          path: '',
          element: <Home/> 
        },
        {
          path: 'results',
          element: <Results/>
        },
        {
          path: 'watch',
          element: <Watch/>
        }
      ]
		},
    
]);

function App() {

  return (
    <>
         <RouterProvider router={router}/>
    </>
  )
}

export default App;
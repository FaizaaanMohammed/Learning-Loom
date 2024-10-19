import './App.css';
import MenuAppBar from './Common/Navbar';
import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import Home from './Pages/cms/Home';
import About from './Pages/cms/About';
import Blog from './Pages/cms/Blog';
import Courses from './Pages/cms/Courses';
import Contact from './Pages/cms/Contact';
import Login from './Pages/auth/Login';
import Register from './Pages/auth/Register';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Footer from './Common/Footer';
import Swal from 'sweetalert2';
import Categorydetails from './Pages/cms/Categorydetails';
import BlogDetails from './Pages/cms/BlogDetails';


function App() {

  const PrivateRoute = ({children})=>{
    const token = localStorage.getItem('auth') || sessionStorage.getItem("auth");
    return token !== null && token !== undefined?(
      children
    ):(
      toast.warning("Login First"),
      <Navigate to='/login'/>
    )
  }

  const publicRouter = [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
   
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    }

  ]

  const ProtectedRouter =[
    {
      path:'/blog',
      element:<Blog/>
    },
     {
      path:'/courses',
      element:<Courses/>

     },
     {
      path:"/contact",
      element:<Contact/>
     },
     {
      path:"/post/:id",
      element:<Categorydetails/>
     }
     ,
     {
      path:"/blogdetails/:id",
      element:<BlogDetails/>
     }

  ]
  return (
    <>
    <ToastContainer/>
    
    <Router>
    <MenuAppBar/>
      <Routes>
        {
         publicRouter.map((item,key)=>{
            return(
              <>
              <Route
               path={item.path}
               element={item.element}
              />
              </>
            )
         }) 
        }
        // ProtectedRouter
        {
          ProtectedRouter.map((item,key)=>{
            return(
              <>
               <Route
               path={item.path}
               element={<PrivateRoute>{item?.element}</PrivateRoute>}
               />
              </>
            )
          })
        }
      </Routes>
      <Footer/>
    </Router>
    
    
    </>
  );
}

export default App;

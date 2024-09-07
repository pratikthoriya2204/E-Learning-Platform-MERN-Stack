import { useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./sidebar/MainSidebar";
import { useNavigate } from "react-router-dom";
import AddClass from "./sidebarPages/AddClass";

function RootLayout({ children }) {
  let navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('StudentAuthToken')){
      navigate('/');
    }else{
      navigate('/login');
    }
  },[]);
  return (
    <>
      <Navbar />
      <div className="md:flex gap-2">
        <Sidebar />
        <main className="max-w-5xl  md:mx-10 sm:mx-auto py-4">{children}</main>
      </div>
    </>
  );
}

export default RootLayout;

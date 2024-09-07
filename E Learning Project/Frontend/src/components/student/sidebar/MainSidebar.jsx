import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";


// * React icons
import { SlSettings } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { HiMenuAlt3, HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdAdd, MdMenu } from "react-icons/md";
import { NavLink, useLocation, useNavigate, useRoutes } from "react-router-dom";
import logo from "../../../assets/logo.png"
import user from "../../../assets/user.jpg"
import DropdownProfile from "../DropdownProfile";
import { IoHome } from "react-icons/io5";
import classContext from "../../../context/class/classContext";


const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const [openProfile, SetOpenprofile] = useState(false);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  const context = useContext(classContext);
  const {getClass,myClass} = context;

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  useEffect(()=>{
    getClass();
  },[])
  const Nav_animation = isTabletMid
    ? {
      open: {
        x: 0,
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        x: -250,
        width: 0,
        transition: {
          damping: 40,
          delay: 0.15,
        },
      },
    }
    : {
      open: {
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        width: "4rem",
        transition: {
          damping: 40,
        },
      },
    };

  const subMenusList = [
    {
      name: "Machine Learning",
      icon: RiBuilding3Line,
      menus: ["assignments", "FAQ", "Review"],
    },
    {
      name: "Python",
      icon: TbReportAnalytics,
      menus: ["assignments", "FAQ", "Review"],
    },
  ];



  return (
    <>
      <div>
        <div
          onClick={() => setOpen(false)}
          className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
            } `}
        ></div>
        <motion.div
          ref={sidebarRef}
          variants={Nav_animation}
          initial={{ x: isTabletMid ? -250 : 0 }}
          animate={open ? "open" : "closed"}
          className=" bg-white text-gray z-[999] shadow-xl max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
        >
          <div className="flex justify-between items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
            <img
              src={logo}
              width={150}
              alt=""
              className={`${!open ? 'hidden' : 'block'}`}
            />
            <motion.div className='py-3 flex justify-end '>
              <HiMenuAlt3 size={26} className='cursor-pointer hidden md:block' onClick={() => setOpen(!open)} />
            </motion.div>
          </div>

          <div className="flex flex-col  h-full">
            <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
              <li>
                <NavLink to={"/"} className="link">
                  <IoHome size={23} className="min-w-max" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/calender"} className="link">
                  <HiOutlineDatabase size={23} className="min-w-max" />
                  Calender
                </NavLink>
              </li>
              <li>
                <NavLink to={"/login"} className="link " >
                  <BsPerson size={23} className="min-w-max " />
                  Login
                </NavLink>
              </li>
              {(open || isTabletMid) && (
                <div className="border-y py-5 border-slate-300 ">
                  <small className="pl-3 text-slate-500 inline-block mb-2">
                    Enrolled Course
                  </small>
                  {subMenusList?.map((menu) => (
                    <div key={menu.name} className="flex flex-col gap-1">
                      <SubMenu data={menu} />
                    </div>
                  ))}
                </div>
              )}
              <li>
                <NavLink to={"/settings"} className="link">
                  <SlSettings size={23} className="min-w-max" />
                  Settings
                </NavLink>
              </li>
            </ul>
            {open && (
              <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium ">
              </div>
            )}
          </div>
        </motion.div>
      </div>
      {/* mobile navbar design */}
      <div className="m-3 md:hidden bg-slate-50 p-3" >
        <div className="flex flex-row justify-between text-center align-middle ">
          <div className="flex flex-row order-first">
            <MdMenu size={33} className="" onClick={() => setOpen(true)} />
            <h2 className="text-[1.40rem] ms-3">E-Learning Platform</h2>

          </div>
          <div className="flex flex-row order-last">
            <img src={user} alt="" className="w-10 border rounded-3xl " onClick={() => SetOpenprofile((open) => !open)} />
          </div>
        </div>
      </div>

      {/* <div className="fixed md:hidden border rounded-full bg-slate-50 z-40 p-4 bottom-3 right-3 shadow-2xl shadow-slate-800 ">
        <MdAdd size={36} className="text-blue-600" />
      </div> */}


      {
        openProfile && <DropdownProfile />
      }
      
    </>
  );
};

export default Sidebar;

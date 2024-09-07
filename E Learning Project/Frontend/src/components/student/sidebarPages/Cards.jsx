import React, { useContext, useEffect, useRef, useState } from 'react'


import AddClass from './AddClass'
import { MdAdd } from 'react-icons/md'
import CardItem from './CardItem'
import classContext from '../../../context/class/classContext';
import { useNavigate } from 'react-router-dom';

function Cards() {
  let navigate = useNavigate();
  const [showModal, setShowModel] = useState(false);

  const Context = useContext(classContext);
  const {myClass,getClass} = Context;
  
  useEffect(()=>{
    if(localStorage.getItem('StudentAuthToken')){
      getClass();
    }else{
      navigate('/login');
    }
  },[])
  return (
    <>
      <AddClass isVisible={showModal} onClose={() => setShowModel(false)} />
      <div onClick={() => setShowModel(true)} className="fixed md:hidden border rounded-full bg-slate-50 z-40 p-4 bottom-3 right-3 shadow-2xl shadow-slate-800" >
        <MdAdd size={36} className="text-blue-600" />
      </div>
      <div className="mx-auto px-5 md:py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-36 gap-y-8">
          {/* card Items */}

          {
            myClass.map((cls)=>{
              return <CardItem  key={cls._id} cls={cls}/>
            })
          }

        </div>
      </div>
    </>
  )
}

export default Cards

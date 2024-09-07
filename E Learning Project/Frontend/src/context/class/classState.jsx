import { useState } from "react";
import ClassContext from "./classContext";

const ClassState = (props)=>{


    const host = "http://localhost:5000";

    const classInitial = [];

    const [myClass , setMyClass] = useState(classInitial);

    // get Class

    const getClass = async()=>{

        const response = await fetch(`${host}/api/stdclass/fetchallclasses`,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "studentAuth-Token": localStorage.getItem('StudentAuthToken'),
            },
        });

        const json = await response.json();
        setMyClass(json);
    }

    const addClass = async(name,description,subject)=>{
        const response = await fetch(`${host}/api/stdclass/addclass`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "studentAuth-Token": localStorage.getItem('StudentAuthToken'),
            },
            body : JSON.stringify({name,description,subject}),
        });
        const json = await response.json();
        setMyClass(myClass.concat(json));
    }


    return (
        <ClassContext.Provider value={{myClass,getClass,addClass}}>
            {props.children}
        </ClassContext.Provider>
    )
}


export default ClassState;
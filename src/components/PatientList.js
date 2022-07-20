import React from "react";
import Patient from "./Patient";

export default function PatientList({patients, setPatient}){
    
    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5 flex flex-col justify-center '>

        {patients.length ? (
            <div>
                <h2 className="font-black text-3xl text-center">Patient List</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Manage your
                    <span className="text-indigo-600 font-bold"> Patients and Appointments</span>
                </p>
                <div className=" md:h-screen overflow-y-auto">
                    { 
                    patients.map((p)=> {
                        return (
                        <Patient 
                            p={p}
                            key={p.id}
                            setPatient={setPatient}                           
                        />)
                    })
                    }
                </div>
            </div>
        ): (<div className='flex flex-col justify-self-center	'>
                <h2 className="font-black text-3xl text-center">No Patients in the list</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                Start by adding your patients
                <span className="text-indigo-600 font-bold"> and they will be shown here</span>
            </p>
        </div>)}

    </div>
    )
    

}
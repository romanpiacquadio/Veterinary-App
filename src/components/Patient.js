import React from 'react'

const Patient = ({p, setPatient}) => {
    const { name, owner, email, date, symptoms } = p
    return (
        <div className="m-3 bg-white shadow-md rounded-xl px-5 py-10 pb-5 first:mt-0">
                    <p className="font-bold mb-3 text-gray-700 uppercase"> Name: {""}
                        <span className="font-normal normal-case">{name}</span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase"> Owner: {""}
                        <span className="font-normal normal-case">{owner}</span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {""}
                        <span className="font-normal normal-case">{email}</span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase">Creation Date : {""}
                        <span className="font-normal normal-case">{date}</span>
                    </p>

                    <p className="font-bold mb-3 text-gray-700 uppercase"> Symptoms: {""}
                        <span className="font-normal normal-case">{symptoms}</span>
                    </p>

                    <div className='flex justify-between'>
                        <button 
                            type="button"                      
                            className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                            onClick={()=>setPatient(p)}>Edit
                        </button>
                        <button
                        type="button"
                        className="py-2 px-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                        >Delete</button>
                    </div>
        </div>
  )
}

export default Patient
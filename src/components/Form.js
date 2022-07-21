import React, {useState, useEffect} from 'react';
import Error from './Error';

function Form({setPatients, patients, patient, setPatient}) {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false)

  useEffect(() => {
    if( Object.keys(patient).length > 0 ){
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptoms(patient.symptoms)
    }
  }, [patient])

  const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random + fecha
  }
  // const [input, setInput] = useEffect({
  //   name: '',
  //   owner: '',
  //   email: '',
  //   date: '',
  //   symptoms: ''
  // })

  const handleSubmit = (e) => {
    e.preventDefault()

    //validación del formulario
    if( [name, owner, email, date, symptoms].includes('')){
        setError(true)
        return
    }
    
    setError(false)
    
    const objPatient = {
      name, 
      owner, 
      email, 
      date, 
      symptoms,
    }
    
    if(patient.id){
      //edicion
      objPatient.id = patient.id
      let modifiedArray = patients.map(pSelected => 
        pSelected.id === patient.id ? objPatient : pSelected)
      setPatients(modifiedArray)
      setPatient({})
      } else {
      //creacion
      objPatient.id = generateId()
      setPatients([...patients, objPatient])
    }

    //reiniciar el form
    setName('')
    setOwner('')
    setEmail('')
    setDate('')
    setSymptoms('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className="font-black text-3xl text-center">Follow up</h2>
      
      <p className="text-lg mt-5 text-center mb-10">
        Add Patients and {''}
        <span className='text-indigo-600 font-bold'>Manage Them</span>
      </p>

      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        
        { error && <Error><p>All fields must be completed</p></Error> }

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="pet">Pet's name</label>
            <input id='pet' type="text" placeholder="Pet's name" className="border-2 w-full  p-2 mt-2 placeholder-gray-400 rounded-md" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="owner">Owner's name</label>
            <input id='owner' type="text" placeholder="Owner's name" className="border-2 w-full  p-2 mt-2 placeholder-gray-400 rounded-md" value={owner} onChange={(e) => setOwner(e.target.value)}/>
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="email">Email</label>
            <input id='email' type="email" placeholder="Email address" className="border-2 w-full  p-2 mt-2 placeholder-gray-400 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="date">Creation Date</label>
            <input id='date' type="date" className="border-2 w-full  p-2 mt-2 placeholder-gray-400 rounded-md" value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor="symptoms">Symptoms</label>
          <textarea 
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe symptoms" value={symptoms} onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input 
          type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
          value={ patient.id ? 'Edit Patient': 'Add Patient' }
        />


        
      </form>

    </div>
  )
}

export default Form
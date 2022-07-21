import { useEffect, useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';

function App() {
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})
  // const [dPatient, setDPatient] = useState({})

  // useEffect( () => {
  //   if(dPatient.id){
  //       let filtered = patients.filter( p => p.id !== dPatient.id)
  //       setPatients(filtered)
  //       setDPatient({})
  //   }
  // }, [dPatient])

  useEffect(()=>{
    const allPatients = JSON.parse(localStorage.getItem('patients'));
    if(allPatients.length > 0){
      setPatients(allPatients)
    }
  }, []);

  useEffect(() =>{
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])
  
  const deletePatient = (id) => {
    const filtered = patients.filter( p => p.id !== id)
    setPatients(filtered)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className='mt-12  md:flex justify-evenly'>

        <Form 
          patients= {patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />

        <PatientList
          patients={patients}
          setPatient={setPatient}
          // setDPatient={setDPatient}
          deletePatient={deletePatient}
        />
        
      </div>
    </div>
  );
}

export default App;
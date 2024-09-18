
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import { useState } from 'react';

function App() {
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);

    },1500);

  }
  const [Mode,setMode]=useState('light');
  const toogleMode = ()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#212529";
      showAlert('Dark Mode has enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert('Light Mode has enabled','success');


    }

  }
  return (
  <>
 
<Alert alert={alert}/>
<Navbar title="TextUtils" aboutText="About Us" Mode={Mode} toogleMode={toogleMode}/>

<div className="container my-3" Mode={Mode}>
  <TextForm showAlert={showAlert} Mode={Mode} heading="Enter your Text Here"/>
        </div>
   

{/* <About Mode={Mode}/> */}
  

  </>  
  
  );
}

export default App;

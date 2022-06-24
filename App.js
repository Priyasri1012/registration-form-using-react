import React, {useState} from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  })
  const [submitted, setSubmitted]= useState(false);
  const [valid, setValid]= useState(false);
  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstname: event.target.value})
  }
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastname: event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstname && values.lastname && values.email){
      setValid(true);
    }
    setSubmitted(true);
  }
  return (
      <div className='form-container'>
      <form className='register-form' onSubmit={handleSubmit}>
      {submitted && valid ? <div className='success-message'>Success! Thanks for registering.</div> : null}
      <input
        disabled= {submitted}
        onChange={handleFirstNameInputChange}
        value={values.firstname}
       className='form-field'
       placeholder='First Name'
       name='firstname' ></input>
       {submitted && !values.firstname ? <span>Enter first name</span> : null }
       <input
       disabled= {submitted}
       onChange={handleLastNameInputChange}
         value={values.lastname}
       className='form-field'
       placeholder='Last Name'
       name='lastname' ></input>
        {submitted && !values.lastname ? <span>Enter last name</span>  : null }
       <input
       disabled= {submitted}
        onChange={handleEmailInputChange}
         value={values.email}
       className='form-field'
       placeholder='Email'
       name='email' ></input>
        {submitted && !values.email ? <span>Enter Email Id</span>  : null } 
        <button
        className='form-field'
        type='submit'>Register</button>
      </form>
    </div>
  );
}

export default App;

import React from 'react'
import "./Form.css"
import { useState } from "react";

const Form = () => {
  const [form,setForm] = useState({username:"",email:"",password:"",rules:false})
  
  function readCheckBox(e){
    setForm({...form, rules:e.target.checked})
}

function handleSubmit(e){
    e.preventDefault()
    setForm({username:"",email:"",password:"",rules:""})
    console.log('form submitted');
  }

  return (
    <div className='form-container'>
        <h1 className='form-heading'>Form</h1>
        <form onSubmit={handleSubmit}>
            <div className='form input-username'> 
                <label htmlFor="username">Username</label>
                <input type="text" id='username' maxLength={10} minLength={4} value={form.username} onChange={(e)=>setForm({...form,username:e.target.value})}/>
            </div>
            <div className='form input-email'> 
                <label htmlFor="email">Email</label>
                <input type="email" id='email' value={form.email}  onChange={(e)=>setForm({...form,email:e.target.value})}/>
            </div>
            <div className='form input-password'> 
                <label htmlFor="password">Password</label>
                <input type="password" id='password' value={form.password}  maxLength={25} minLength={6} onChange={(e)=>setForm({...form,password:e.target.value})}/>
            </div>
            <div className='checkbox'> 
                <input type="checkbox" id='privacy' value={form.rules} onChange={readCheckBox}/>
                <label htmlFor="privacy" >Accept conditions and rules</label>
            </div>

           <button type='submit' className='submit-button' disabled={!form.username || !form.email || !form.password}>Sign Up</button>
        </form>
        </div>
  )
}

export default Form
import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function emailOnCreate(event){
        console.log(event.target.value);
        setEmail(event.target.value)
    }

    function passwordOnCreate(event){
        console.log(event.target.value);
        setPassword(event.target.value)
    }
    
    return ( 
        <>
        <h1>Signup</h1>
        <input 
            type="text" 
            placeholder="email signup" 
            value= {email}
            onChange={(e)=> emailOnCreate(e)} 
        />

        <input 
            type="text" 
            placeholder="password" 
            value= {password}
            onChange={(e)=> passwordOnCreate(e)} 
            />
        </>
     );
}
 
export default Signup;
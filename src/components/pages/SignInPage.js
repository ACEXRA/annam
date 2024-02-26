import React , {useState }from 'react';

const SignInPage = () => {

  const[email,setEmail]=useState('');

  const handleSignIN=()=>{
    
    console.log(`signing in with email:${email}`);

  }


  return (
    <div>
      <h2>Sign In</h2>

      <form>

        <label>
            Email
        </label>

        <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button type="button"  onClick={handleSignIN}>Sign In</button>
        

      </form>
    </div>
        
      
    
  )
}

export default SignInPage

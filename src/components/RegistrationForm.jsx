function RegistrationForm() {
  return (
    
    <form id="registration-form">
      <input name='forename' type='text' placeholder='Forename' required/>
      <input name='surname' type='text' placeholder='Surname' required/>
      <input name='username' type='text' placeholder='Username' required/>
      <input name='password' type='password' placeholder='Password' required/>
      <input name='password' type='password' placeholder='Confirm password' required/>
      <button>Register</button>
    </form>
  )
}

export default RegistrationForm
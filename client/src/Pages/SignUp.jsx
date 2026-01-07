import './Login.css'

function SignUp() {

  return (
    <>
    <div className='login'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLu7NUMFCS7GKcutI4sZPEA1sEpipcLifGng&s" alt="logo e antarsise" />
        <form method='post'>

            <div>
                <label htmlFor="name">Name:</label>
                <br />
                <input type="text" id='name' name='name' placeholder='Mosques name'/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <br />
                <input type="email" id="email" name='email' placeholder='example@gmail.com'/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <br />
                <input type="password" id='password' name='passowrd' placeholder='********'/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default SignUp

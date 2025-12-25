import './Login.css'

function Login() {

  return (
    <>
    <div>
        <form action="">
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name='email'/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='passowrd'/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Login

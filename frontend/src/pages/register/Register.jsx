import "./register.css"

export default function Register() {


//POST FOR SIGNUP




  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
        <label>First Name</label>
            <input type="text" className="registerInput" placeholder="Enter Your First Name..."/>
            <label>Last Name</label>
            <input type="text" className="registerInput" placeholder="Enter Your Last Name..."/>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter Your Email..."/>
            
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter Your Username..."/>
            
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter Your Password..."/>
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>

    </div>
  )
}

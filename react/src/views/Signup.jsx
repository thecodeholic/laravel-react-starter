import {Link} from "react-router-dom";

export default function Signup() {
  return (
    <div className="login-signup-form">
      <div className="form">
        <form >
          <h1 className="title">Signup for Free</h1>
          <input type="text" placeholder="Full Name"/>
          <input type="email" placeholder="Email Address"/>
          <input type="password" placeholder="Password"/>
          <input type="password" placeholder="Repeat Password"/>
          <button>Signup</button>
          <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
        </form>
      </div>
    </div>
  )
}

import {Link} from "react-router-dom";

export default function Login() {
  return (
    <div className="login-signup-form">
      <div className="form">
        <form className="login-form">
          <h1 className="title">Login into your account</h1>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button>Login</button>
          <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
        </form>
      </div>
    </div>
  )
}

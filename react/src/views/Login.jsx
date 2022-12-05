import {Link} from "react-router-dom";
import axiosClient from "../axios-client.js";
import {createRef} from "react";
import {useStateContext} from "../context/ContextProvider.jsx";

export default function Login() {
  const emailRef = createRef()
  const passwordRef = createRef()
  const {setUser, setToken} = useStateContext()

  const onSubmit = ev => {
    ev.preventDefault()

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    axiosClient.post('/login', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
      })
  }

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Login into your account</h1>
          <input ref={emailRef} type="email" placeholder="Email"/>
          <input ref={passwordRef} type="password" placeholder="Password"/>
          <button className="btn btn-block">Login</button>
          <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
        </form>
      </div>
    </div>
  )
}

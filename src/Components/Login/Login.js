import React,{useState,useContext} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FirebaseContext } from '../../firestore/Context1';
import Logo from '../../olx-logo.png';
import './Login.css';


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const handleLogin =(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/home')
    }).catch((error)=>{
        alert(error.message)
      })
  }

  return (
    <div>
      <img width="200px" height="200px" src={Logo} className='login-logo'></img>
      <div className="loginParentDiv">
        <form onSubmit={handleLogin}>
          <label htmlFor="fname" >Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href="/signup" className='signup-button'>Signup</a>
      </div>
      <div className="disclaimer-first">
      We won't share your personal details with anyone.<br/><br/>If you continue, you are accepting <a href='https://help.olx.in/hc/en-us'>OLX Terms and <br/>Conditions and Privacy Policy</a>
      </div>
    </div>
  );
}

export default Login;

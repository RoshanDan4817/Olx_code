import React, {useState,useContext} from 'react';
import { FirebaseContext } from '../../firestore/Context1';
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import postPic from '../../loginEntryPointPost.png'
import chatPic from '../../loginEntryPointChat.png'
import './Signup.css';

export default function Signup() {
  const history = useHistory()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)

  const handleSubmit=(e)=>{
    console.log("value of e",e)
    var user = null
    e.preventDefault()
    console.log("value of firebase",firebase);
    console.log("value of usernmae",username)
    console.log("value of phone",phone)
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      user = firebase.auth().currentUser;
      user.sendEmailVerification();
      }).then(
        function (){
          user.updateProfile({
          displayName: username,
          username:username,
          phone:phone
          }).then(()=>{
            firebase.firestore().collection('users').add({
              id:user.uid,
              username:username,
              phone:phone
            }).then(()=>{
              history.push("/login");
            })    
              })
        })
      .catch(function(error) {
      console.log(error.message);
      });
    console.log('Validation link was sent to ' + email + '.');
  }


  return (
    <div className="page-back">
      <div>
        <img width="200px" height="200px" src={Logo} alt="Logo" className='logo'/>
        <img width='200px' height='200px' src={postPic} alt="pic1" className='post-pic'/>
        <div className="post-picDialog">Help make OLX a saferplace <br/>to buy and sell</div>
        <img width='200px' height='200px' src={chatPic} alt="pic2" className='chat-pic'/>
        <div className="chat-picDialog">Help make OLX a saferplace <br/>to buy and sell</div>
        <img />
      </div>      
      <div className="signupParentDiv">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            required
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="email"
            name="email"
            required
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="phone"
            name="phone"
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="password"
            name="password"
            required
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <div>
          <a href='/login' className='login-link' >Login</a>
        </div>        
      </div>
    </div>
  );
}

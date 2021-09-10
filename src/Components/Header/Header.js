import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthenticationContext, FirebaseContext } from '../../firestore/Context1';




function Header() {
  const {history} = useHistory();
  const {user} = useContext(AuthenticationContext);
  const {firebase} = useContext(FirebaseContext);
  
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text"
          className='placeSearch-input ' />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span className='login'>{user ? `Welcome ${user.displayName}` : <a href='/login'>Login</a>}</span>          
          {user && <span className='logout' onClick={()=>{
            firebase.auth().signOut().then(function prototype(){
              <a href='/home'/>
            })
          }}> Logout</span>}
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span><a href='/sell' className='sell'>SELL</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

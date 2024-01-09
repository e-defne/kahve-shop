import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { auth } from './firebaseconfig';

function Login() {
  const navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        navigate('/'); 
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        navigate('/'); 
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="login__logo">
          <StorefrontIcon className="login__logoImage" />
          <h2 className="login__logoTitle">Thekahve Shop</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Giriş Yap</h1>

        <form>
          <h5>Mail Adresi</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

          <h5>Şifre</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" className="login__signInButton" onClick={signIn}>
            Giriş Yap
          </button>
        </form>

        <p>
        
        </p>

        <button className="login__registerButton" onClick={register}>
          Üyelik Hesabı Oluştur
        </button>
      </div>
    </div>
  );
}

export default Login;
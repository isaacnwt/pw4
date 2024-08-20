import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/loginService";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUser(email, password); 
      navigate('/welcome', { state: userData });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className='login-form-wrap'>
      <h2>Login</h2>
      <form className='login-form'>
        <input type='email' name='email' placeholder='Email' required 
               onChange={(e) => setEmail(e.target.value)}/>
        <input type='password' name='password' placeholder='Password' required 
               onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit' className='btn-login' 
                onClick={(e) => handleLogin(e)}>Login</button>
      </form>
    </div>
  );
}

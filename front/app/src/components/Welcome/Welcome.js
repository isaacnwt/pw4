import { useState } from "react";
import { useLocation } from "react-router-dom";
import './Welcome.css';

export function Welcome() {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const { email, password } = location.state || {};

  return (
    <div className="welcome-container">
      <h2>Bem-vindo!</h2>
      <p>Você entrou com o usuário: <strong>{email}</strong></p>
      <div className="password-container">
        <p>Senha: 
          <strong>{showPassword ? password : '*'.repeat(password.length)}</strong>
        </p>
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Esconder' : 'Mostrar'}
        </button>
      </div>
    </div>
  );
}

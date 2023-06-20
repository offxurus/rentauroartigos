import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLog, setIsLog] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(e);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3333/Session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.EmailUsuario) {
        // Login válido
        console.log(data.EmailUsuario);
        setIsLog(true);
      } else {
        // Login inválido
        setLoginError(data.message);
        console.log(isLog)
      }
    } catch (error) {
      console.error('Ocorreu um erro ao fazer login:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-heading">SUA CONTA PARA TUDO DA RENTAURO</h2>
        {loginError && <p>{loginError}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="label">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="input"
              required
            />
          </div>
          <button type="submit" className="login-button">Entrar</button>
        </form>
        {isLog ? <p class="userlog">Usuário Logado</p> : null}
        <p className="register-link">
          Ainda não possui login? <a href="/cadastro">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

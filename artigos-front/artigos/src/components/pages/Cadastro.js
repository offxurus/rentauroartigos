import React, { useState } from 'react';
import './Cadastro.css';
import MeuServico  from '../../service';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const meuServico = new MeuServico();


  function createUserData() {
    console.log(email,password);
    let user = {email:email, password:password}
    meuServico.enviarDados(user).then(dados =>{
      console.log(dados);
    })
    .catch(error => {
      console.error('Erro ao obter dados:', error);
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="cadastro-page">
      <div className="cadastro-container">
        <h2 className="cadastro-heading">Faça parte da Familia Rentauro</h2>
        <p className="cadastro-description">
          Crie seu perfil de membro da Rentauro e consiga acesso antecipado às melhores comunidades, inspirações e aos produtos Rentauro.
        </p>
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
          <div className="form-group">
            <label htmlFor="confirmPassword" className="label">Confirme a Senha:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="input"
              required
            />
          </div>
          <button type="submit" onClick={createUserData} className="cadastro-button">Venha conosco</button>
        </form>
        <p className="cadastro-terms">
          Ao criar uma conta, você concorda com a Política de Privacidade e com os Termos de Uso da Rentauro.
        </p>
      </div>  
    </div>
  );
};

export default Cadastro;

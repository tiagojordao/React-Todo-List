import React, { useState } from 'react';

import axios from 'axios';

import { Container } from './styles';

import { Link } from 'react-router-dom';

export default function Register() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [rwSenha, setRwSenha] = useState('');

  async function handleSubmit () {
    var body = {
      email,
      senha
    }

    if (senha !== rwSenha) {
      alert('Senhas não concidem!');
    }
    else {
      const response = await axios({
          method: 'POST',
          url: 'http://localhost:3333/cadastro',
          data: body
      })

      if(response.status){
        window.location.replace("/");
      }
    }
  }

  return (
    <Container className="w3-col">
      <div className="block w3-third">
        <h2>Todo List Registro</h2>
        <div className="login">
          <input id="email" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
          <input id="password" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
          <input id="rewrite-password" type="password" placeholder="Digite a senha novamente" value={rwSenha} onChange={e => setRwSenha(e.target.value)}/>
          <button type="submit" onClick={handleSubmit}>REGISTRAR</button>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    </Container>
  );
}
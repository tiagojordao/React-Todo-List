import React, { useState } from 'react';

import axios from 'axios';

import { Container } from './styles';

import { Link } from 'react-router-dom';

export default function Register() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit () {
    var body = {
      email,
      senha
    }
    const response = await axios({
        method: 'POST',
        url: 'http://localhost:3333/cadastro',
        data: body
    })

    if(response.status){
      window.location.replace("/");
    }
  }

  return (
    <Container>
      <div className="block">
        <h2>Todo List Registro</h2>
        <div className="login">
          <input id="email" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
          <input id="password" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
          <button type="submit" onClick={handleSubmit}>REGISTRAR</button>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    </Container>
  );
}
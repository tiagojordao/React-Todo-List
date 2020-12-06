import React, { useState } from 'react';

import axios from 'axios';

import { Container } from './styles';

export default function Auth() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit () {
    var body = {
      email,
      senha
    }
    const response = await axios({
        method: 'POST',
        url: 'http://localhost:3333/auth',
        data: body
    })

    if(response.status){
      window.location.replace("/user");
    }
  }

  return (
    <Container>
      <div className="block">
        <h2>Todo List Login</h2>
        <div className="login">
          <input id="email" type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
          <input id="password" type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
          <button type="submit" onClick={handleSubmit}>ENTRAR</button>
        </div>
      </div>
    </Container>
  );
}
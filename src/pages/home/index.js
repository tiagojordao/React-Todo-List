import React, { useState, useEffect } from 'react';

import { MdCheck, MdDelete } from 'react-icons/md'

import axios from 'axios';

import { Container, Label } from './styles';

function Home() {
  const [task, setTask] = useState('');
  const [resp, setResp] = useState('');
  const [label, setLabel] = useState('');

  const[tarefa, setTarefa] = useState([{}]);

  async function handleSubmit () {
    var body = {
      task,
      resp,
      status: "em_andamento",
      label,
    }
    const response = await axios({
        method: 'POST',
        url: 'http://localhost:3333/addnewtask',
        data: body
    })
    
    response.data.map ( r => {
      if (r.label === 'Pessoal') {
        r.label = 'blue';
      }
      else if (r.label === 'Profissional') {
        r.label = 'red';
      }
      else if (r.label === 'Academico') {
        r.label = 'green';
      }
    })

    setTarefa(response.data);
    // setTarefa([...tarefa, body]);
  }
  useEffect(() => {},[tarefa])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect (async () => {
      const response = await axios ({
        method: 'GET',
        url: `http://localhost:3333`
      });

      response.data.map ( r => {
        if (r.label === 'Pessoal') {
          r.label = 'blue';
        }
        else if (r.label === 'Profissional') {
          r.label = 'red';
        }
        else if (r.label === 'Academico') {
          r.label = 'green';
        }
      })

      setTarefa(tarefa => response.data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  async function handleDelete (taskToDelete) {
    const response = await axios ({
      method: 'DELETE',
      url: `http://localhost:3333/deletetask/${taskToDelete}`
    }); 

    response.data.map ( r => {
      if (r.label === 'Pessoal') {
        r.label = 'blue';
      }
      else if (r.label === 'Profissional') {
        r.label = 'red';
      }
      else if (r.label === 'Academico') {
        r.label = 'green';
      }
    })

    setTarefa(response.data);
  };

  async function handleCheck (taskToCheck){
      const response = await axios ({
        method: 'PUT',
        url: `http://localhost:3333/checktask/${taskToCheck}`
      });

      response.data.map ( r => {
        if (r.label === 'Pessoal') {
          r.label = 'blue';
        }
        else if (r.label === 'Profissional') {
          r.label = 'red';
        }
        else if (r.label === 'Academico') {
          r.label = 'green';
        }
      })

      setTarefa(response.data);
  };

  return (
    <Container className="w3-col">
      <header>
        <h1>Web Todo List</h1>
      </header>

      <main>
        <div className="toAdd w3-third">
          <header>
            <h2>Adicionar Nova Tarefa</h2>
          </header>
          <div className="newTask">
            <input id="tarefa" type="text" value={task} placeholder="Tarefa" onChange={e => setTask(e.target.value)}/>
            <input id="responsavel" type="text" value={resp} placeholder="Responsável" onChange={e => setResp(e.target.value)}/>
            <input id="label" type="text" value={label} placeholder="Label" onChange={e => setLabel(e.target.value)}/>
            <input id="submitButton" type="button" value="Adicionar"onClick={handleSubmit}/>
          </div>
        </div>

      <div className="todo w3-third">
          <header>
            <h2>A fazer</h2>
          </header>
          <ul id="incomplete-tasks">
              {tarefa && tarefa.map(tarefa => tarefa.status === 'em_andamento' ?
                <li key={tarefa.nome}>
                  <div className="todoBlock">
                  <header>
                    <Label color={tarefa.label} />
                  </header>
                    <div>
                      <p>Tarefa:</p> {tarefa.task}<br/>
                      <p>Resp:</p> {tarefa.resp}
                    </div>
                    <span>
                      <button id="check" onClick={() => handleCheck(tarefa.task)}><MdCheck size="16px"/></button>
                      <button id="delete" onClick={() => handleDelete(tarefa.task)}><MdDelete size="16px"/></button>
                    </span>
                  </div>
                </li> : (null)
              )}
          </ul>
      </div>
            
      <div className="done w3-third">
          <header>
            <h2>Feito</h2>
          </header>
          <ul id="completed-tasks">
              {tarefa && tarefa.map(tarefa => tarefa.status === "done" ?
                <li key={tarefa.nome}>
                  <div className="doneBlock">
                    <header>
                      <Label color={tarefa.label} />
                    </header>
                    <div>
                      <p>Tarefa:</p> {tarefa.task}<br/>
                      <p>Responsavel:</p> {tarefa.resp}
                    </div>
                    <span>
                      <button id="delete" onClick={() => handleDelete(tarefa.task)}><MdDelete size="16px"/></button>
                    </span>
                  </div>
                </li> : (null)
              )}
          </ul>
      </div>

      </main>
    </Container>
  );
}

export default Home;
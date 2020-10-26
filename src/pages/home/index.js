import React, { useState, useEffect } from 'react';

import { MdCheck, MdDelete } from 'react-icons/md'

import axios from 'axios';

import { Container } from './styles';

function Home() {
  const [task, setTask] = useState('');
  const [resp, setResp] = useState('');

  const[tarefa, setTarefa] = useState([{}]);


  async function handleSubmit () {
    var body = {
      task,
      resp,
      status: "em_andamento"
    }
    const response = await axios({
        method: 'POST',
        url: 'http://localhost:3333/addnewtask',
        data: body
    })
    setTarefa([...tarefa, body]);
  }
  useEffect(() => {},[tarefa])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect (async () => {
      const response = await axios ({
        method: 'GET',
        url: `http://localhost:3333`
      });
      setTarefa(tarefa => response.data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  async function handleDelete (taskToDelete) {
    const response = await axios ({
      method: 'DELETE',
      url: `http://localhost:3333/deletetask/${taskToDelete}`
    }); 

    setTarefa(response.data);
  };

  async function handleCheck (taskToCheck){
      const response = await axios ({
        method: 'PUT',
        url: `http://localhost:3333/checktask/${taskToCheck}`
      });

      setTarefa(response.data);
  };

  return (
    <Container>
      <header>
        <h1>Web Todo List</h1>
        {/* <div className="tabs">
          <button>Pessoal</button>
          <button>Profissional</button>
          <button>Academico</button>
        </div> */}
      </header>

      <main>
        <div className="toAdd">
          <header>
            <h2>Adicionar Nova Tarefa</h2>
          </header>
          <div className="newTask">
            <input id="tarefa" type="text" value={task} placeholder="Tarefa" onChange={e => setTask(e.target.value)}/>
            <input id="responsavel" type="text" value={resp} placeholder="Responsável" onChange={e => setResp(e.target.value)}/>
            <input id="submitButton" type="button" value="Adicionar"onClick={handleSubmit}/>
          </div>
        </div>

      <div className="todo">
          <header>
            <h2>A fazer</h2>
          </header>
          <ul id="incomplete-tasks">
              {tarefa && tarefa.map(tarefa => tarefa.status === 'em_andamento' ?
                <li key={tarefa.nome}>
                  <div className="todoBlock">
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
            
      <div className="done">
          <header>
            <h2>Feito</h2>
          </header>
          <ul id="completed-tasks">
              {tarefa && tarefa.map(tarefa => tarefa.status === "done" ?
                <li key={tarefa.nome}>
                  <div className="doneBlock">
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
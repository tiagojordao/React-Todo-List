import styled from 'styled-components';

export const Container = styled.div`

  height: calc(100% - 80px);

  header {
    height: 80px;
    padding: 0 30px;
    background: #333;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {

    }
  }

  main {
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 32px;

    .toAdd {
      padding: 0 15px;
      height: 100%;
      flex: 0 0 350px;

      header {
        background: none;
        display: flex;
        align-items: center;
        height: 40px;
      }

      h2 {
        font-weight: bold;
        font-size: 16px;
        padding: 0 10px;
        background: none;
        color: #333;
      }

      .newTask {
          width: 100%;
          position: relative;
          background: #fff;
          border-radius: 5px;
          margin-top: 30px;
          margin-bottom: 8px;
          padding: 16px;
          box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
          border-top: 20px solid rgba(230, 236, 245, 0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
      }
    }

    .todo {
      padding: 0 15px;
      height: 100%;
      flex: 0 0 400px;

      header {
        background: none;
        display: flex;
        align-items: center;
        height: 40px;
      }
      h2 {
        font-weight: bold;
        font-size: 16px;
        padding: 0 10px;
        background: none;
        color: #333;
      }

      ul {
        margin-top: 30px;

        li .todoBlock {
          width: 100%;
          position: relative;
          background: #fff;
          border-radius: 5px;
          margin-bottom: 8px;
          padding: 16px;
          box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
          border-top: 20px solid rgba(230, 236, 245, 0.4);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }

    .done {
      padding: 0 15px;
      height: 100%;
      flex: 0 0 400px;

      header {
        background: none;
        display: flex;
        align-items: center;
        height: 40px;
      }
      h2 {
        font-weight: bold;
        font-size: 16px;
        padding: 0 10px;
        background: none;
        color: #333;
      }

      ul {
        margin-top: 30px;

        li .doneBlock {
          width: 100%;
          position: relative;
          background: #fff;
          border-radius: 5px;
          margin-bottom: 8px;
          padding: 16px;
          box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
          border-top: 20px solid rgba(230, 236, 245, 0.4);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }

  #tarefa, #responsavel {
    padding: 16px 0 16px 8px;
    width: 80%;
    margin: 8px 16px;
  }

  #submitButton {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333;
    color: #fff;
    border: 0;
    width: 80%;
    margin: 8px 16px;
    padding: 16px 0;
    border-radius: 3px;
    cursor: pointer;

    :hover {
      background: #666;
    }
  }

  #incomplete-tasks li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #incomplete-tasks li button {
    border: none;
    border-radius: 50%;
    background: #ffa500;
    height: 30px;
    width: 30px;
    color: #fff;
    margin: 8px 4px;
    cursor: pointer;

    :hover {
      background: rgba(240,220,110, 0.9);
    }
  }

  #incomplete-tasks li #delete {
    background: red;

    :hover {
      background: rgba(255,0,0,0.7);
    }
  }


  #completed-tasks li {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #completed-tasks li button {
    border: none;
    border-radius: 50%;
    background: red;
    height: 30px;
    width: 30px;
    color: #fff;
    margin: 8px 4px;
    cursor: pointer;

    :hover {
      background: rgba(255,0,0,0.7);
    }
  }

  p{
    font-weight: bold;
    margin: 8px 0 4px 0;
  }
`;

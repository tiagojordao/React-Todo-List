import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .block {
    background: rgba(255,255,255, 0.3);
    height: 50%;
    width: 30%;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .block h2 {
    margin: 16px 0;
  }

  .block .login {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .block .login input {
    margin: 4px 0;
    padding: 12px 4px;
    width: 80%;

    color: #666;
    background: rgba(0,0,0,0.1);

    border: none;
    border-radius: 2px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }

  .block .login button {
    width: 80%;

    padding: 8px 0;
    margin-top: 4px;

    border: none;

    background: #666;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: #999;
    }
  }
      .block .login a {
    text-decoration: none;
    text-align: center;


    width: 80%;

    padding: 8px 0;
    margin-top: 4px;

    border: none;

    background: rgb(0,100,255);
    color: #fff;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: rgb(0,100,255, 0.6);
    }
  }
`;

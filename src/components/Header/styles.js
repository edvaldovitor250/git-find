import styled from "styled-components";

export const HeaderStyles = styled.header`
 background-color: #2D333B;
  width: 100%;
  padding: 0;
  margin:0; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative; 
  top: -8px; 

  h1 {
    background-color: #2D333B;
    padding: 25px;
    margin: 0; 
    color: white;
    font-family: 'Inter', 'Roboto', 'Arial';
    font-size: 30px;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 24px;
      padding: 10px;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    h1 {
      font-size: 26px;
      padding: 12px;
    }
  }

  @media (min-width: 901px) {
    h1 {
      font-size: 30px;
      padding: 15px;
    }
  }
`;

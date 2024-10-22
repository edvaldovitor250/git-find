import styled from "styled-components"

export const HeaderStyles = styled.header `
header {
  background-color: #2D333B; 
  width: 100%; 
  height: auto; 
  padding: 10px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  flex-direction: column; 
  text-align: center;
}

h1 {
  color: white; 
  font-family: 'Inter', 'Roboto', 'Arial'; 
  font-size: 30px;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  flex-direction: column; 
  text-align: center;
}

@media (max-width: 600px) {
  header { padding: 5px; }
  h1 { font-size: 24px; }
}

@media (min-width: 601px) and (max-width: 900px) {
  header { flex-direction: column; justify-content: center; }
  h1 { font-size: 26px; }
}

@media (min-width: 901px) {
  header { height: 50px; flex-direction: row; }
  h1 { font-size: 30px; }
}

`;
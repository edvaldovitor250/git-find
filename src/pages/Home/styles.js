// StyledComponents.js
import styled from "styled-components";

export const Conteudo = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const Background = styled.img`
  height: 100vh;
  position: absolute;
  left: 0;
`;

export const Info = styled.div`
  width: 65%;
  margin-right: 90px;
  margin-top: 40px;
  color: white;
  font-size: 24px;
`;

export const Input = styled.input`
  border-radius: 20px;
  border: 1px solid #e5e5e5;
  min-width: 250px;
  width: 85%;
  background: transparent;
  font-size: 18px;
  padding: 10px;
  color: #999;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border-radius: 10rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-left: 15px;
  margin-top: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0cf; 
    border-radius: 10rem;
    z-index: -2;
  }

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #3a4447;
    transition: all 0.3s;
    border-radius: 10rem;
    z-index: -1;
  }

  &:hover {
    background-color: #a56969;
    transform: translateY(-2px);
    cursor: pointer;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(66, 46, 46, 0.1);
  }
`;

export const Profile = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border: 2px solid #e5e5e5;
  margin-right: 32px;
`;

export const PerfilContainer = styled.div`
  display: flex;
  margin: 40px 0;
`;

export const PerfilTitle = styled.h3`
  color: #999999;
  font-size: 24px;
  margin: 0;
`;

export const PerfilText = styled.p`
  color: #999999;
  font-size: 12px;
  margin: 0;
`;

export const PerfilSpan = styled.span`
  display: block;
  color: #999999;
  font-size: 12px;
  margin: 20px 0 0 0;
`;

export const Repositories = styled.h4`
  color: var(--cor-texto);
  font-size: 32px;
  margin: 12px 0;
  text-align: center;
  border-bottom: 2px solid var(--cor-borda);
  padding-bottom: 10px;
  background-color: var(--cor-fundo);
  border-radius: 5px;
  box-shadow: 0 4px 10px var(--cor-sombra);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const DescriptionProfile = styled.div`
  p {
    margin-top: 6px;
  }
`;

export const mediaQueries = `
  @media (min-width: 601px) and (max-width: 900px) {
    ${Info} {
      width: 80%;
      margin-right: 60px;
      font-size: 22px;
    }

    ${Input} {
      min-width: 200px;
    }

    ${Button} {
      font-size: 16px;
    }

    ${Profile} {
      width: 100px;
      height: 100px;
    }

    ${PerfilTitle} {
      font-size: 22px;
    }

    ${Repositories} {
      font-size: 28px;
    }
  }

  @media (min-width: 901px) {
    ${Info} {
      width: 65%;
    }

    ${Repositories} {
      font-size: 32px;
    }
  }
`;

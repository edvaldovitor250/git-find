import styled from "styled-components";


export const ItemListStyled = styled.div `


.item-list {
    margin: 24px 0;
  }
  
  .item-list strong {
    color: #539BF5;
    font-size: 24px;
    margin: 24px 0;
  }
  
  .item-list p {
    color: #999999;
    font-size: 12px;
    margin-top: 24px;
  }
  
  .item-list a {
    text-decoration: none;
  }
  
  @media (min-width: 601px) and (max-width: 900px) {
    .item-list {
      margin: 20px 0;
    }
  
    .item-list strong {
      font-size: 22px;
    }
  
    .item-list p {
      font-size: 14px;
    }
  }
  
  @media (min-width: 901px) {
    .item-list {
      margin: 24px 0;
    }
  
    .item-list strong {
      font-size: 24px;
    }
  
    .item-list p {
      font-size: 12px;
    }
  }
  

`


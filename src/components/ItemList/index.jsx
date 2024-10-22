import { useState } from 'react';
import { ItemListStyled } from './styles.js';  // Importe o ItemListStyled

export const ItemList = ({ title, description, url }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasDescription = description && description.length > 0;

  return (
    <ItemListStyled>
      <div className='item-list'>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <strong>{title}</strong>
        </a>
        <p>
          {hasDescription ? (
            isExpanded ? (
              description
            ) : (
              description.slice(0, 100) + '...'
            )
          ) : (
            'Sem descrição disponível.'
          )}
          {hasDescription && description.length > 100 && (
            <button onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'Ver menos' : 'Ver mais'}
            </button>
          )}
        </p>
        <hr />
      </div>
    </ItemListStyled>
  );
}

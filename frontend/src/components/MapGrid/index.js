import React from 'react';

import * as S from './styled';

function MapGrid(props) {
  return (
    <S.Map>
      {props.mapCells.map((mapRow, indexRow) => (
        <S.MapRow key={indexRow}>
          {mapRow.map((mapCell, indexCell) => (
              <S.MapCell key={indexCell}>{ mapCell == "A" ? '🛫' : mapCell == 'N' ? '☁️' : ''}</S.MapCell>
          ))}
        </S.MapRow>
      ))}
    </S.Map>
  )
}

export default MapGrid;
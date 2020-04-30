import React from 'react';

import * as S from './styled';

function Header(props) {

  function decreaseNumberOfAirports() {
    if(props.numberOfAirports > 3) {
      props.setNumberOfAirports( props.numberOfAirports - 1 )
    }
  }

  function decreaseNumberOfClouds() {
    if(props.numberOfClouds > 4) {
      props.setNumberOfClouds( props.numberOfClouds - 1 )
    }
  }

  function decreaseMapDimensions() {
    if(props.mapDimensions > 10) {
      props.setMapDimensions( props.mapDimensions - 1 )
    }
  }

  return (
    <S.Container>
      <S.HeaderGroup>
          <S.HeaderGroupItem>
            <S.HeaderGroupLabel>Aeroportos</S.HeaderGroupLabel>
            <S.HeaderGroupControllers>
              <S.HeaderGroupItemValue>{props.numberOfAirports}</S.HeaderGroupItemValue>
              <S.HeaderGroupButton onClick={ () => props.setNumberOfAirports( props.numberOfAirports + 1 ) }>+</S.HeaderGroupButton>
              <S.HeaderGroupButton onClick={ () => decreaseNumberOfAirports() }>-</S.HeaderGroupButton>
            </S.HeaderGroupControllers>
          </S.HeaderGroupItem>

          <S.HeaderGroupItem>
            <S.HeaderGroupLabel>Nuvens</S.HeaderGroupLabel>
            <S.HeaderGroupControllers>
              <S.HeaderGroupItemValue>{props.numberOfClouds}</S.HeaderGroupItemValue>
              <S.HeaderGroupButton onClick={ () => props.setNumberOfClouds( props.numberOfClouds + 1 ) }>+</S.HeaderGroupButton>
              <S.HeaderGroupButton onClick={ () => decreaseNumberOfClouds() }>-</S.HeaderGroupButton>
            </S.HeaderGroupControllers>
          </S.HeaderGroupItem>

          <S.HeaderGroupItem>
            <S.HeaderGroupLabel>Dimensões do Mapa</S.HeaderGroupLabel>
            <S.HeaderGroupControllers>
              <S.HeaderGroupItemValue>{props.mapDimensions}</S.HeaderGroupItemValue>
              <S.HeaderGroupButton onClick={ () => props.setMapDimensions( props.mapDimensions + 1 ) }>+</S.HeaderGroupButton>
              <S.HeaderGroupButton onClick={ () => decreaseMapDimensions() }>-</S.HeaderGroupButton>
            </S.HeaderGroupControllers>
          </S.HeaderGroupItem>
      </S.HeaderGroup>
      <S.Button onClick={() => props.updateAnalysis()}>Recalcular</S.Button>
    </S.Container>
  )
}

export default Header;
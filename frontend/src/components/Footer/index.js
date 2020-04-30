import React from 'react';

import * as S from './styled';

function Footer(props) {
  return (
    <S.Container>
      <S.Paragraph>As nuvens atingirão o primeiro aeroporto em, aproximadamente, <S.Highlight>{props.daysUntilFirstAirport}</S.Highlight> { props.daysUntilFirstAirport > 1 ? 'dias' : 'dia'}</S.Paragraph>
      <S.Paragraph>E, em <S.Highlight>{props.daysUntilAllAirports}</S.Highlight> {props.daysUntilAllAirports > 0 ? 'dias' : 'dia'}, atingirão o restante dos aeroportos.</S.Paragraph>
    </S.Container>
  )
}

export default Footer;
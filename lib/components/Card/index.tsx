import React from 'react';
import styled from 'styled-components';

const Box = styled.View`
  font-weight: 800;
  width: ${global.pxw(375)}px;
  margin-top: ${global.pxw(20)}px;
  background: red;
  height: ${global.pxw(200)}px;
  /* ios 支持  */
  /* box-shadow: 10px 20px 1px yellow; */
`;

const Card = () => {
  return <Box />;
};

export default Card;

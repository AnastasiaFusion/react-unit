import React from 'react';
import styled from 'styled-components';
import { padding } from './constants';

const MenuItem = (props) => {
  const {minWidth, children } = props;

  return (
    <Item minWidth={minWidth} padding={padding}>
      {children}
    </Item>
  );
};

const Item = styled.div`
  min-width: ${({ minWidth }) => `${minWidth}px`};
  color: #2C86EB;
  font-weight: bold;
  height: 40px;
  padding: ${({ padding }) => `5px ${padding}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #D1E6FA;
  }
`;

export default MenuItem;

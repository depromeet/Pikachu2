import styled from 'styled-components';
import React, { PropTypes } from 'react';

const Wrapper = styled.div`
  height: 50px;
  display:flex;
  background:red;
  margin: 0 50px;
`;

function MUNSubHeader(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

MUNSubHeader.propTypes = {
  children: PropTypes.node,
};
export default MUNSubHeader;

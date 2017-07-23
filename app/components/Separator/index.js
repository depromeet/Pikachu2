/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Line from './Line';

const DivWrapper = styled.div`
  text-align: center;
  height: 40px;
`;

const SpanWrapper = styled.span`
  background-color: #fff;
  display: inline-block;
  padding: 8px;
`;

const BlankWrapper = styled.span`
  display: inline-block;
  padding: 8px;
  content: '';
  min-height: 32px;
`;

class Separator extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <DivWrapper>
        {
          (this.props.children && (
            <SpanWrapper>{this.props.children}</SpanWrapper>
          )) || (<BlankWrapper> </BlankWrapper>)
        }
        <Line></Line>
      </DivWrapper>
    );
  }
}

export default Separator;

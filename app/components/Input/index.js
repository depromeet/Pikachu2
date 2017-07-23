/* eslint-disable react/prop-types */
import React, { PropTypes } from 'react';
import styled from 'styled-components';

import inputStyles from './inputStyles';
const StyledInput = styled.input`${inputStyles}`;
const InputWrapper = styled.div`
  text-align: center;
  border: 1px solid #d7d7d7;
  margin: 5px 0;
  height: 40px;
`;

// We require the use of src and alt, only enforced by react in dev mode


function Input(props) {
  return (
    <InputWrapper>
      <StyledInput
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
      />
    </InputWrapper>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
};

export default Input;

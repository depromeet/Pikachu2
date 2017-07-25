import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  &:nth-child(3) {
    box-shadow: 2px 0 0 0 #206DBB inset;
  }
`;


const Icon = styled.div`
  width: 34px;
  height: 34px;
  margin: 4px 8px;
  background-color: #ededed;
  background-image: url('${(props) => props.src}');
  background-size: 34px 34px;
  border: 1px solid #ededed;
  border-radius: 50%;
`;

function GroupIcon({ src }) {
  return (
    <Wrapper>
      <Icon src={src} />
    </Wrapper>
  );
}

GroupIcon.propTypes = {
  src: PropTypes.string.isRequired,
};

export default GroupIcon;

import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 6px 0px;
  margin: 0 10px;
  min-width: 50px;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  color: #fff;

  &:active {
    background: #41ADDD;
    color: #FFF;
  }
`;

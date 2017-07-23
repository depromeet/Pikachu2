import styled from 'styled-components';
const Circle = (props) => {
  const CirclePrimitive = styled.button`
    margin: 5px 0;
    height: 40px;
    background: #4267b2;
    color: #fff;
    border: 1px solid #29487d
  `;
  return <CirclePrimitive />;
};

Circle.propTypes = {
  delay: PropTypes.number,
  rotate: PropTypes.number,
};

export default Circle;

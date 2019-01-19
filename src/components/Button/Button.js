import React from 'react';
import PropTypes from 'prop-types';

import Btn from './styled';

const propTypes = {
  inactive: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  inactive: false,
};

const Button = ({ inactive, children, onClick }) => (
  <Btn type="button" onClick={onClick} inactive={inactive}>
    {children}
  </Btn>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;

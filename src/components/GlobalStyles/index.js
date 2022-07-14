import './GlobalStyles.scss';
import PropTypes from 'prop-types';
import React from 'react';

function GlobalStyles({ children }) {
  return React.Children.only(children); //chi chap nhan 1 children
}

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalStyles;
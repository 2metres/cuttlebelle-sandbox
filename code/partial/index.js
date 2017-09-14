import PropTypes from 'prop-types';
import React from 'react';

import styles from './partial.css';

const Partial = ( page ) => (
  <div className="textwrapper">{ page._body }</div>
);


Partial.propTypes = {
  _body: PropTypes.node.isRequired,
};

Partial.defaultProps = {};

export default Partial;

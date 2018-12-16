import React from "react"
import PropTypes from 'prop-types';

const Loading = ({ children, customClasses }) => (
  <div id="loading-overlay">
    <div className={`loading-content ${customClasses}`}>
      {children}
    </div>
  </div>
);

Loading.propTypes = {
  children: PropTypes.node,
  customClasses: PropTypes.string
};

Loading.defaultProps = {
  children: null,
  customClasses: null
};

export default Loading;
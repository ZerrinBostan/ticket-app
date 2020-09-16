import React from 'react';
import IcoMoon from 'react-icomoon';
import PropTypes from 'prop-types';

const iconSet = require('./selection.json');

const Icon = ({ className, ...props }) => {
  const { icon } = props;
  return (
    <IcoMoon
      iconSet={iconSet}
      {...props}
      className={`icon-${icon} className`}
    />
  );
};

Icon.defaultProps = {
  className: '',
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default Icon;

import React from "react";
import Proptypes from "prop-types";
import * as icons from "react-bootstrap-icons";

const Icon = ({ iconName, ...props }) => {
  const BootstrapIcon = icons[iconName];
  return <BootstrapIcon {...props} />;
};

Icon.propTypes = {
  iconName: Proptypes.string
};

export default Icon;

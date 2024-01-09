import { Audio } from "react-loader-spinner";

import React from "react";

const Loader = () => {
  return (
    <Audio
      height="200"
      width="200"
      radius="9"
      color="red"
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  );
};

export default Loader;

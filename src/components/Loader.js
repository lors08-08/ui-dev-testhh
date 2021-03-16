import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";

function Loader() {
  return (
    <h1 className="loader">
      <CircularProgress size={60} color="primary" />
    </h1>
  );
}

export default Loader;

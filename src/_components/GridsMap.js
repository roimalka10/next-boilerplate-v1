import React from "react";
import Gridboxes from "./grids/GridBoxes";
import Gridbox from "./grids/GridBox";

const gridsMap = {
  gridboxes: (props) => <Gridboxes {...props} />,
  gridbox: (props) => <Gridbox {...props} />,
};

export default gridsMap;

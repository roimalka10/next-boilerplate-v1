import React from "react";
import GridBoxes from "./contentGrids/GridBoxes";
import GridBox from "./contentGrids/GridBox";
import GridRows from "./contentGrids/GridRows";
import GridRow from "./contentGrids/GridRow";

const gridsMap = {
    gridboxes: (props) => <GridBoxes {...props} />,
    gridbox: (props) => <GridBox {...props} />,
    gridrows: (props) => <GridRows {...props} />,
    gridrow: (props) => <GridRow {...props} />,
};

export default gridsMap;

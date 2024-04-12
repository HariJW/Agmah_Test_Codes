import React, { useState, useContext } from "react";
import { Mosaic, MosaicWindow, MosaicContext } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";

function MosaictTest() {
  const initialLayout = {
    direction: "row",
    first: "topPane",
    second: {
      direction: "column",
      first: "leftPane",
      second: "rightPane",
    },
  };

  const [layout, setLayout] = useState(initialLayout);

  const createNode = () => `panel-${Math.random().toString(36).substr(2, 9)}`;


  const { mosaicActions } = useContext(MosaicContext);

  return (
    <Mosaic
      renderTile={(id, path) => (
        <MosaicWindow
          key={id}
          createNode={createNode}
          path={path}
          title={`Panel ${id}`}
          draggable
        >
          Hi I am {`Panel ${id}`}
        </MosaicWindow>
      )}
      value={layout}
      onChange={(newLayout) => setLayout(newLayout)}
    />
  );
}

export default MosaictTest;

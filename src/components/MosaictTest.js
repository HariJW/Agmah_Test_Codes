import React from "react";
import { Mosaic, MosaicWindow } from "react-mosaic-component";
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

  const createNode = () => `panel-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Mosaic
        renderTile={(id, path) => (
          <MosaicWindow
            key={id}
            createNode={createNode}
            path={path}
            title={`Panel ${id}`}
          >
            Hi I am {`Panel ${id}`}
          </MosaicWindow>
        )}
        initialValue={initialLayout}
      />
    </div>
  );
}

export default MosaictTest;

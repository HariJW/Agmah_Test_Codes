import React, { useState } from "react";
import { Mosaic, MosaicWindow } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";

const AddAtDropPosition = () => {
  const [mosaicData, setMosaicData] = useState({
    direction: "row",
    first: "1",
    second: "2",
  });

  const onDrop = (sourceId, targetPath, dropPosition) => {
    console.log(sourceId, targetPath, dropPosition);
    const newPanelId = `newPanel_${Date.now()}`;
    const newMosaicData = {
      ...mosaicData,
      [newPanelId]: `New Panel ${newPanelId}`,
    };
    setMosaicData(newMosaicData);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "80%",
        width: "80%",
      }}
    >
      <div
        style={{
          flex: "0 0 auto",
          padding: "10px",
          borderBottom: "1px solid #ccc",
        }}
      >
        Drag this text and drop it in the mosaic to create a new panel:
        <div
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData("text/plain", "Drag me into mosaic!");
          }}
          style={{
            cursor: "move",
            backgroundColor: "lightblue",
            padding: "5px",
            marginTop: "5px",
          }}
        >
          Drag me!
        </div>
      </div>

      <div style={{ flex: "1 1 auto" }}>
        <Mosaic
          renderTile={(id, path) => (
            <MosaicWindow
              path={path}
              title={id}
              draggable={true}
              createNode={(id) => <div>{id}</div>}
            />
          )}
          value={mosaicData}
          onChange={setMosaicData}
          onDrop={onDrop}
        />
      </div>
    </div>
  );
};

export default AddAtDropPosition;

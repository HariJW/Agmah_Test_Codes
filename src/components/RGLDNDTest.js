import React, { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import DraggableItem from "./DraggableItem";

const ResponsiveGridLayout = WidthProvider(Responsive);

const RGLDNDTest = () => {
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: false },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ]);

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  const onDrop = (layout, layoutItem, event) => {
    console.log("Hello");
    // Generate a new ID based on the current number of items in the layout
    const newId = `item-${layout.length + 1}`;
    // Calculate the position where the item should be placed
    const { x, y } = layoutItem;
    // Add the new item to the layout
    const newLayout = [...layout, { i: newId, x, y, w: 2, h: 2 }];
    setLayout(newLayout);
  };

  return (
    <div>
      <ResponsiveGridLayout
        style={{
          height: "600px",
          width: "1000px",
          backgroundColor: "aliceblue",
        }}
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200 }}
        cols={{ lg: 12 }}
        rowHeight={30}
        onLayoutChange={onLayoutChange}
        onDrop={onDrop}
      >
        {layout.map((item) => (
          <div
            key={item.i}
            data-grid={item}
            style={{ backgroundColor: "green" }}
          >
            {item.i}
          </div>
        ))}
      </ResponsiveGridLayout>
      <DraggableItem id="newItem">New Item</DraggableItem>
    </div>
  );
};

export default RGLDNDTest;

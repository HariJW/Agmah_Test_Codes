import React, { useEffect, useRef, useState, useMemo } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

function RGLTest() {
  const ResponsiveGridLayout = useMemo(() => WidthProvider(Responsive), []);

  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 1, h: 1 },
    { i: "b", x: 1, y: 0, w: 3, h: 1 },
    { i: "c", x: 4, y: 0, w: 1, h: 1 },
  ]);

  const [maxHeight, setMaxHeight] = useState(8);
  const [parentHeight, setParentHeight] = useState(0);
  const lastLayoutsThatRespectMaxHeight = useRef([]);
  const parentRef = useRef(null);

  const saveCurrentLayouts = (
    layout,
    oldItem,
    newItem,
    placeholder,
    e,
    element
  ) => {
    lastLayoutsThatRespectMaxHeight.current = layout;
  };

  const resetOldLayoutIfNewHeightTooBig = async (currentLayout) => {
    currentLayout.forEach((element) => {
      if (element.y + element.h > maxHeight) {
        setLayout(lastLayoutsThatRespectMaxHeight.current);
        return true;
      }
    });
    return false;
  };

  useEffect(() => {
    setTimeout(() => {
      resetOldLayoutIfNewHeightTooBig(layout);
    }, 50);
  }, [layout]);

//   useEffect(() => {
//     const maxHeightt = Math.floor(parentHeight / 20);
//     console.log(maxHeightt);
//     setMaxHeight(maxHeightt);
//   }, [parentHeight]);


  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setParentHeight(entry.contentRect.height);
      }
    });

    if (parentRef.current) {
      resizeObserver.observe(parentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  

  return (
    <div ref={parentRef} style={{ height: "80%", width: "60%" }}>
      <ResponsiveGridLayout
        style={{
          backgroundColor: "#c9c9c9",
          height: "100%",
          width: "100%",
        }}
        className="layout"
        layouts={{ lg: layout, md: layout, sm: layout }}
        rowHeight={20}
        compactType={null}
        isBounded={true}
        isDraggable={false}
        // onDragStart={saveCurrentLayouts}
        // onResizeStart={saveCurrentLayouts}
        // onLayoutChange={(currentLayout, allLayouts) => {
        //   setLayout(currentLayout);
        // }}
      >
        {layout.map((item) => (
          <div
            key={item.i}
            data-grid={item}
            style={{ backgroundColor: "gray" }}
          >
            Item {item.i}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}

export default RGLTest;

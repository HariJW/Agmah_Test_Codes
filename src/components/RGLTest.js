import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

function RGLTest() {
  const ResponsiveGridLayout = useMemo(() => WidthProvider(Responsive), []);
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 2, h: 1 },
    { i: "b", x: 2, y: 0, w: 2, h: 1 },
    { i: "c", x: 4, y: 0, w: 2, h: 1 },
    { i: "d", x: 6, y: 0, w: 2, h: 1 },
    { i: "e", x: 8, y: 0, w: 2, h: 1 },
    { i: "f", x: 10, y: 0, w: 2, h: 1 },
  ]);

  const parentRef = useRef(null);

  const [dynamicRowHeight, setDynamicRowHeight] = useState(100);
  const [dynamicMargin, setDynamicMargin] = useState([10, 10]);
  const [dynamicContainerPadding, setDynamicContainerPadding] = useState([
    10, 10,
  ]);
  const [noOfRows, setNoOfRows] = useState(6);

  useEffect(() => {
    if (parentRef.current?.offsetHeight) {
      setDynamicRowHeight(
        (parentRef.current.offsetHeight -
          dynamicMargin[1] * (noOfRows - 1) -
          dynamicContainerPadding[0] * 2) /
          noOfRows
      );
    }
  }, [
    parentRef.current?.offsetHeight,
    dynamicMargin,
    dynamicContainerPadding,
    noOfRows,
  ]);

  return (
    <div
      ref={parentRef}
      style={{
        height: "60%",
        width: "1200px",
      }}
    >
      <ResponsiveGridLayout
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#c9c9c9",
        }}
        className="layout"
        resizable // Enable resizing
        layouts={{
          xxl: layout,
          xl: layout,
          lg: layout,
          md: layout,
          sm: layout,
          xs: layout,
          xxs: layout,
        }}
        rowHeight={dynamicRowHeight}
        isBounded={true}
        compactType={null}
        preventCollision={true}
        allowOverlap={false}
        margin={dynamicMargin}
        // containerPadding={[0,0]}
        containerPadding={dynamicContainerPadding}
        cols={{ xxl: 12, xl: 12, lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
      >
        {layout.map((item) => (
          <div
            key={item.i}
            isBounded={true}
            data-grid={item}
            style={{ backgroundColor: "gray", border: "1px solid black" }}
          >
            Item {item.i}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}

export default RGLTest;

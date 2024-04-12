import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import ConfigurationBox from "./ConfigurationBox";

const ResponsiveGridLayout = WidthProvider(Responsive);

const MyGridLayout = () => {
  const [hoveredItem, setHoveredItem] = useState(true);

  const layouts = {
    lg: [
      { i: "a", x: 0, y: 0, w: 1, h: 1 },
      { i: "b", x: 1, y: 0, w: 1, h: 1 },
      { i: "c", x: 4, y: 0, w: 1, h: 1 },
    ],
  };

  const handleMouseEnter = (i, layoutItem) => {
    setHoveredItem({ id: i, ...layoutItem });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={20}
    >
      {layouts.lg.map((item) => (
        <div
        className="layout-item"
          key={item.i}
          data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }}
          // onMouseEnter={() => handleMouseEnter(item.i, item)}
          // onMouseLeave={handleMouseLeave}
        >
          {item.i}

          {hoveredItem && (
          <ConfigurationBox
            style={{
              position: 'absolute',
              top: 0, 
              left: 0,
              width: '100px',
              height: '50px',
              background:'blue'
            }}
          />
        )}
        </div>
      ))}
      
    </ResponsiveGridLayout>
  );
};

export default MyGridLayout;

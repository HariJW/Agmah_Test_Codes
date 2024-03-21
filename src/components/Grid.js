import { Responsive, WidthProvider } from "react-grid-layout";
import styled from "styled-components";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
  { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  { i: "c", x: 4, y: 0, w: 1, h: 2 },
];

const getLayouts = () => {
  const savedLayouts = localStorage.getItem("grid-layout");

  return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
};

const GridItemWrapper = styled.div`
  background: #f5f5f5;
`;

const GridItemContent = styled.div`
  padding: 8px;
`;

const Root = styled.div`
  padding: 16px;
`;

export const Grid = () => {
  const handleLayoutChange = (layout, layouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(layouts));
  };

  return (
    <Root>
      <ResponsiveGridLayout
        layouts={getLayouts()}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={300}
        width={1000}
        onLayoutChange={handleLayoutChange}
      >
        <GridItemWrapper key="a">
          <GridItemContent>Blue</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="b">
          <GridItemContent>Gray</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="c">
          <GridItemContent>Green</GridItemContent>
        </GridItemWrapper>
      </ResponsiveGridLayout>
    </Root>
  );
};

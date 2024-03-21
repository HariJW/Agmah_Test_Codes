import React, { useState, useRef, useEffect } from "react";
import dropRight from "lodash/dropRight";
import "./ExampleApp.css"
import {
  Corner,
  createBalancedTreeFromLeaves,
  getLeaves,
  getNodeAtPath,
  getOtherDirection,
  getPathToCorner,
  Mosaic,
  MosaicBranch,
  MosaicDirection,
  MosaicNode,
  MosaicParent,
  MosaicWindow,
  MosaicZeroState,
  updateTree,
} from "react-mosaic-component";
import classNames from "classnames";

// Define themes
const THEMES = {
  Blueprint: "mosaic-blueprint-theme",
  "Blueprint Dark": classNames("mosaic-blueprint-theme", "bp3-dark"),
  None: "",
};

// Define additional controls
// const additionalControls = [<CloseAdditionalControlsButton />];

// Define an empty array
const EMPTY_ARRAY = [];

// ExampleWindow component
const ExampleWindow = ({ count, path, totalWindowCount }) => {
  const adContainer = useRef(null);

  useEffect(() => {
    if (adContainer.current == null) {
      return;
    }

    const script = document.createElement("script");

    script.src =
      "//cdn.carbonads.com/carbon.js?serve=CEAIEK3E&placement=nomcoptergithubio";
    script.async = true;
    script.type = "text/javascript";
    script.id = "_carbonads_js";

    adContainer.current.appendChild(script);
  }, []);

  return (
    <div>
      <div>
        <h1>{`Window ${count}`}</h1>
        {count === 3 && <div ref={adContainer} />}
      </div>
    </div>
  );
};

// ExampleApp component
const ExampleApp = () => {
  const [currentNode, setCurrentNode] = useState({
    direction: "row",
    first: 1,
    second: {
      direction: "column",
      first: 2,
      second: 3,
    },
    splitPercentage: 40,
  });
  const [currentTheme, setCurrentTheme] = useState("Blueprint");

  const totalWindowCount = getLeaves(currentNode).length;

  const onChange = (currentNode) => {
    setCurrentNode(currentNode);
  };

  const onRelease = (currentNode) => {
    console.log("Mosaic.onRelease():", currentNode);
  };

  const autoArrange = () => {
    const leaves = getLeaves(currentNode);

    setCurrentNode(createBalancedTreeFromLeaves(leaves));
  };

  const addToTopRight = () => {
    let tempNode = currentNode;
    const totalWindowCount = getLeaves(tempNode).length;
    if (tempNode) {
      const path = getPathToCorner(tempNode, Corner.TOP_RIGHT);
      const parent = getNodeAtPath(tempNode, dropRight(path));
      const destination = getNodeAtPath(tempNode, path);

      const direction = parent ? getOtherDirection(parent.direction) : "row";

      let first;
      let second;
      if (direction === "row") {
        first = destination;
        second = totalWindowCount + 1;
      } else {
        first = totalWindowCount + 1;
        second = destination;
      }

      tempNode = updateTree(tempNode, [
        {
          path,
          spec: {
            $set: {
              direction,
              first,
              second,
            },
          },
        },
      ]);
    } else {
      tempNode = totalWindowCount + 1;
    }

    setCurrentNode(tempNode);
  };

  const renderNavBar = () => {
    return (
      <div className="navbar bp3-dark">
        <div className="navbar-group">
          <div>
            <a href="https://github.com/nomcopter/react-mosaic">
              react-mosaic <span className="version">v1.0.0</span>
            </a>
          </div>
        </div>
        <div className="navbar-group button-group">
          <label className={classNames("theme-selection", "label", "inline")}>
            Theme:
            <select
              value={currentTheme}
              onChange={(e) => setCurrentTheme(e.currentTarget.value)}
            >
              {Object.keys(THEMES).map((label) => (
                <option key={label}>{label}</option>
              ))}
            </select>
          </label>
          <div className="navbar-separator" />
          <span className="actions-label">Example Actions:</span>
          <button className={classNames("button")} onClick={autoArrange}>
            Auto Arrange
          </button>
          <button className={classNames("button")} onClick={addToTopRight}>
            Add Window to Top Right
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="ExampleApp">
      {renderNavBar()}
      <div className="mosaic-layout">{/* Mosaic layout component */}</div>
    </div>
  );
};

export default ExampleApp;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { scaleLinear } from "d3-scale";
import { csv } from "d3-fetch";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Sphere,
  Graticule
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";

const Body = styled.body`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MapWrapper = styled.div`
  width: 1200px;
`;

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([-5, 5])
  .range(["#b5efff", "#006c8a"]);

function WorldMap() {
  const [data, setData] = useState([]);
  const [gdp, setGdp] = useState()
  const [content, setContent] = useState("");

  useEffect(() => {
    csv(`/data/sample_map_data.csv`).then((data) => {
      setData(data);
    });
    csv(`/data/gdp_annual_change.csv`).then((gdp) => {
      setGdp(gdp);
    });
  }, []);

  console.log('dat', data);
  console.log('gdp', gdp);

  return (
    <Body>
      <ReactTooltip>{content}</ReactTooltip>
      <MapWrapper>
        <ComposableMap
          data-tip=""
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 147,
          }}
        >
          <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
          <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
          {/* <ZoomableGroup> */}
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const d = gdp.find((s) => s.ISO3 === geo.properties.ISO_A3);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        const { NAME } = geo.properties;
                        setContent(`${NAME}`);
                      }}
                      onMouseLeave={() => setContent("")}
                      fill={d ? colorScale(d["2020"]) : "#f4e8ff"}
                      style={{ hover: { fill: "#e80e6c", outline: "none" } }}
                    />
                  );
                })
              }
            </Geographies>
          {/* </ZoomableGroup> */}
        </ComposableMap>
      </MapWrapper>
    </Body>
  );
}

export default WorldMap;

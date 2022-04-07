import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import LineAnalytics from "./component/LineAnalytics";
import WorldMap from "./component/WorldMap";

const Body = styled.div `
  height: 100vh;
`
const Header = styled.h1 `
  margin: 3rem 1rem;
  display: flex;
`
function App() {
/*
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/gdp/"); // using proxy we don't need the http://127.0.0.1:8000
        setData(res.data);
      } catch (e) {
        console.log(e);
        setData({});
      }
    })();
  }, []);
*/

  return (
    <Body>
      <Header>
        GDP Charts and Graphs for Data Science 479
      </Header>
      {/* <LineAnalytics /> */}
      <WorldMap />
    </Body>
  );
}

export default App;

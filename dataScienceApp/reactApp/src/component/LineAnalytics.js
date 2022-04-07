import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import Select from "react-select";

const Body = styled.body`
  display: flex;
  flex-direction: row;
  justify-content: evenly-spaced;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
`;
const SideBar = styled.div`
  min-width: 10rem;
`;
const LineAnalytics = () => {
  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Africa");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("data/final_data.json"); // using proxy we don't need the http://127.0.0.1:8000
        setData(await res.json());
      } catch (e) {
        console.log(e);
        setData({});
      }
    })();
  }, []);

  // console.log(data.slice(0,100));
  const countries = [...new Set(data.map((item) => item.entity_name))];
  console.log(countries);

  return (
    <Body>
      {/* <h1 className="text-heading">Line Chart Using Rechart</h1> */}
      <SideBar>
        <Select
          options={countries.map((name) => ({ value: name, label: name }))}
          onChange={(event) => setSelectedCountry(event.value)}
        />
      </SideBar>
      <ResponsiveContainer width="100%" aspect={2.5}>
        <LineChart
          data={data
            .filter((item) => item.entity_name === selectedCountry)
            .map((items) => ({
              year: items.measure_year,
              gdp: +items.measure_value,
              debt: +items.measure_debt_value,
            }))}
          height={300}
          width={600}
          margin={{ right: 50, top: 10, left: 10, bottom: 0 }}
        >
          <CartesianGrid />
          <XAxis dataKey="year" interval={"preserveStartEnd"}/>
          <YAxis dataKey="gdp" interval={"preserveStartEnd"}/>
          <YAxis dataKey="debt" interval={"preserveStartEnd"}/>
          <Legend />
          <Tooltip />
          <Line dataKey="gdp" stroke="black" activeDot={{ r: 1 }} />
          <Line dataKey="debt" stroke="red" activeDot={{ r: 1 }} />
        </LineChart>
      </ResponsiveContainer>
    </Body>
  );
};

export default LineAnalytics;

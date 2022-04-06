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

const Body = styled.body `
  display: flex;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
`

// Sample chart data
const pdata = [
  {
    name: "MongoDb",
    student: 11,
    fees: 120,
  },
  {
    name: "Javascript",
    student: 15,
    fees: 12,
  },
  {
    name: "PHP",
    student: 5,
    fees: 10,
  },
  {
    name: "Java",
    student: 10,
    fees: 5,
  },
  {
    name: "C#",
    student: 9,
    fees: 4,
  },
  {
    name: "C++",
    student: 10,
    fees: 8,
  },
];

function App() {
  const [data, setData] = useState([]);

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

  console.log(data);

  return (
    <Body>
      <h1 className="text-heading">Line Chart Using Rechart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} margin={{ right: 300 }}>
          <CartesianGrid />
          <XAxis dataKey="name" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="student" stroke="black" activeDot={{ r: 8 }} />
          <Line dataKey="fees" stroke="red" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Body>
  );
}

export default App;

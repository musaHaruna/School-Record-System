import React, { useState } from "react";
import { BarChart, Label, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { GoDotFill } from "react-icons/go";

const StudentGrowthChart = ({ data }) => {
  const [selectedClass, setSelectedClass] = useState("All");

  const handleChangeClass = (event) => {
    setSelectedClass(event.target.value);
  };

  return (
    <section>
      <div className="chart student-growth-chart">
        <div>
          <h2>Student's Growth</h2>
          <p>Last update: {new Date().toDateString()}</p>
        </div>

        <div className="inner-flex">
          <div>
            <GoDotFill style={{ color: "#4A3AFF", fontSize: "px" }} />
            <h6>Boys</h6>
          </div>
          <div>
            <GoDotFill style={{ color: "#B062FF", fontSize: "px" }} />
            <h6>Girls</h6>
          </div>
          <select value={selectedClass} onChange={handleChangeClass}>
            <option value="All">All class</option>
            <option value="Primary 1">Primary 1</option>
            <option value="Primary 2">Primary 2</option>
            <option value="Primary 3">Primary 3</option>
            <option value="Primary 4">Primary 4</option>
            <option value="Primary 5">Primary 5</option>
          </select>
        </div>
      </div>

      <div>
        <BarChart width={450} height={230} data={data}>
          <YAxis
            type="number"
            domain={[0, 100]}
            axisLine={{ stroke: "gray", strokeWidth: 2 }}
            tick={{ fontSize: 10 }}
          >
            <Label
              value="Growth %"
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle", fontSize: "12px", color: "black" }}
            />
          </YAxis>
          <XAxis
            dataKey="name"
            type="category"
            interval={0}
            axisLine={{ stroke: "gray", strokeWidth: 2 }}
            tick={{ fontSize: 10 }}
          />
          <Tooltip isAnimationActive={false} />

          <Bar
            dataKey="boys"
            fill="#4A3AFF"
            isAnimationActive={false}
            radius={[25, 25, 0, 0]}
          />
          <Bar
            dataKey="girls"
            fill="#B062FF"
            isAnimationActive={false}
            radius={[25, 25, 0, 0]}
          />
        </BarChart>
      </div>
    </section>
  );
};

export default StudentGrowthChart;

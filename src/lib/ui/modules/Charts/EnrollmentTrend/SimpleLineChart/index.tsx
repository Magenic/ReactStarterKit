import React from 'react';
import {getRandomColor} from 'lib/utils';
import numeral from 'numeral';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'lib/ui/core/Chart';

const randomCost = () => Math.floor(Math.random() * 100000);

const series = [
  {
    name: 'H7743',
    data: [
      {year: 2015, cost: randomCost()},
      {year: 2016, cost: randomCost()},
      {year: 2017, cost: randomCost()},
      {year: 2018, cost: randomCost()},
      {year: 2019, cost: randomCost()},
    ],
  },
  {
    name: 'H2342',
    data: [
      {year: 2015, cost: randomCost()},
      {year: 2016, cost: randomCost()},
      {year: 2017, cost: randomCost()},
      {year: 2018, cost: randomCost()},
      {year: 2019, cost: randomCost()},
    ],
  },
  {
    name: 'H6534',
    data: [
      {year: 2015, cost: randomCost()},
      {year: 2016, cost: randomCost()},
      {year: 2017, cost: randomCost()},
      {year: 2018, cost: randomCost()},
      {year: 2019, cost: randomCost()},
    ],
  },
];

export const EnrollmentTrendSimpleLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart width={600} height={300}>
        <CartesianGrid
          horizontal={true}
          vertical={false}
          stroke="lightgray"
          strokeDasharray="0"
        />
        <XAxis
          dataKey="year"
          type="category"
          allowDuplicatedCategory={false}
          tickLine={false}
          axisLine={false}
          tick={{fontWeight: 'bold', fontSize: '12px'}}
          height={30}
          dy={10}
        />
        <YAxis
          dataKey="cost"
          tick={{fontWeight: 'bold', fontSize: '12px'}}
          tickLine={false}
          axisLine={false}
          tickFormatter={(tick: string) => numeral(tick).format('($0a)')}
          width={55}
          dx={-10}
        />
        <Tooltip />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
        />
        {series.map(s => (
          <Line
            dataKey="cost"
            data={s.data}
            name={s.name}
            key={s.name}
            type="linear"
            stroke={getRandomColor()}
            strokeWidth={3}
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EnrollmentTrendSimpleLineChart;

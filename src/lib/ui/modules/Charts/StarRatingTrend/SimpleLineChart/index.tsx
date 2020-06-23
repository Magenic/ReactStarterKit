import React from 'react';
import {getRandomColor} from 'lib/utils';
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

const randomRating = () => {
  const ratings = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
  return ratings[Math.floor(Math.random() * ratings.length)];
};

const series = [
  {
    name: 'H7743',
    data: [
      {year: 2015, rating: randomRating()},
      {year: 2016, rating: randomRating()},
      {year: 2017, rating: randomRating()},
      {year: 2018, rating: randomRating()},
      {year: 2019, rating: randomRating()},
    ],
  },
  {
    name: 'H2342',
    data: [
      {year: 2015, rating: randomRating()},
      {year: 2016, rating: randomRating()},
      {year: 2017, rating: randomRating()},
      {year: 2018, rating: randomRating()},
      {year: 2019, rating: randomRating()},
    ],
  },
  {
    name: 'H6534',
    data: [
      {year: 2015, rating: randomRating()},
      {year: 2016, rating: randomRating()},
      {year: 2017, rating: randomRating()},
      {year: 2018, rating: randomRating()},
      {year: 2019, rating: randomRating()},
    ],
  },
];

export const StartRatingTrendSimpleLineChart = () => {
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
          dataKey="rating"
          domain={[0, 'dataMax']}
          ticks={[0, 1, 2, 3, 4, 5]}
          tick={{fontWeight: 'bold', fontSize: '12px'}}
          tickLine={false}
          axisLine={false}
          width={30}
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
            dataKey="rating"
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

export default StartRatingTrendSimpleLineChart;

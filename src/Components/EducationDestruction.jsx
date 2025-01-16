import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const educationData = [
  { type: "Completely Destroyed", schools: 123, universities: 0 },
  { type: "Partially Damaged", schools: 335, universities: 0 },
];

const EducationStackedBarChart = () => (
  <BarChart width={600} height={300} data={educationData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="type" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="schools" stackId="a" fill="#8884d8" />
    <Bar dataKey="universities" stackId="a" fill="#82ca9d" />
  </BarChart>
);

export default EducationStackedBarChart;

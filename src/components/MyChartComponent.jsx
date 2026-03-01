import {useExpenseStats} from "../hooks/useExpenseStats";
import {PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from "recharts";

export const MyChartComponent = () => {
    const {chartData, COLORS} = useExpenseStats();
    console.log(chartData);
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

// export default MyChartComponent

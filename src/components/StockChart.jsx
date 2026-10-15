// StockChart.jsx
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";
import PropTypes from "prop-types";

function StockChart({ data, isUp }) {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={data}>
        <XAxis dataKey="day" hide />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="price"
          stroke={isUp ? "#22c55e" : "#ef4444"}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

StockChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isUp: PropTypes.bool.isRequired,
};

export default StockChart;
import { PieChart, Pie, Cell, Tooltip } from "recharts";

function DonutChart({ languages, mobile = false }) {
  const COLORS = [
    "#f97316", // orange
    "#8b5cf6", // purple
    "#22c55e", // green
    "#06b6d4", // cyan
    "#ef4444", // red
    "#eab308", // yellow
  ];

  const size = mobile ? 70 : 180;

  const innerRadius = mobile ? 18 : 50;

  const outerRadius = mobile ? 28 : 75;

  return (
    <div
      className="relative"
      style={{
        width: size,
        height: size,
      }}
    >
      <PieChart width={size} height={size}>
        <Pie
          data={languages}
          dataKey="percentage"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
        >
          {languages.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>

      {/* Center Content */}

      <div
        className="
        absolute
        inset-0
        flex
        flex-col
        items-center
        justify-center
        pointer-events-none
      "
      >
        {!mobile && (
  <>
    <span className="text-xl font-bold text-white">
      {languages.length}
    </span>

    <span className="text-[10px] text-gray-400">
      Languages
    </span>
  </>
)}
      </div>
    </div>
  );
}

export default DonutChart;

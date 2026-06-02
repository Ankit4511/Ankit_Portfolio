import { PieChart, Pie, Cell, Tooltip } from "recharts";

function DonutChart({ languages }) {
  const COLORS = [
    "#f97316", // orange
    "#8b5cf6", // purple
    "#22c55e", // green
    "#06b6d4", // cyan
    "#ef4444", // red
    "#eab308", // yellow
  ];

  return (
    <div className="relative w-[180px] h-[180px] mb-8">
      
      <PieChart width={180} height={180}>
        <Pie
          data={languages}
          dataKey="percentage"
          innerRadius={50}
          outerRadius={75}
        >
          {languages.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
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
        <span className="text-xl font-bold text-white">
          {languages.length}
        </span>

        <span className="text-[10px] text-gray-400">
          Languages
        </span>
      </div>

    </div>
  );
}

export default DonutChart;
import LanguageCard from "./LanguageCard";
import DonutChart from "./DonutChart";
import { motion } from "framer-motion";

function TopLanguagesCard({ languages }) {
  const COLORS = [
    "#f97316", // orange
    "#8b5cf6", // purple
    "#22c55e", // green
    "#06b6d4", // cyan
    "#ef4444", // red
    "#eab308", // yellow
    "#ec4899", // pink
    "#3b82f6", // blue
    "#14b8a6", // teal
    "#84cc16", // lime
  ];

  // Sort by percentage and keep only top 5
  const topLanguages = [...languages]
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="
        bg-white/5
        border
        border-white/10
        rounded-2xl
        p-6
        h-[280px]
        
        hover:-translate-y-1
        hover:border-orange-500/30
        transition-all
        duration-300
      "
    >
      <h3 className="text-xl font-bold mb-6">
        Top Languages
      </h3>

      <div className="grid grid-cols-2 gap-6 h-full ">

        {/* LEFT SIDE */}

        <div className="space-y-5 overflow-hidden">

          {topLanguages.map((language, index) => (
            <LanguageCard
              key={index}
              language={language}
              color={COLORS[index]}
            />
          ))}

        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center justify-center">

          <DonutChart
            languages={topLanguages}
            colors={COLORS}
          />

        </div>

      </div>
    </motion.div>
  );
}

export default TopLanguagesCard;
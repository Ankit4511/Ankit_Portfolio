import contributions from "../data/contributions";
import { motion } from "framer-motion";

function ContributionGraphCard() {
  console.log(contributions);

  const colors = [
    "bg-white/10",
    "bg-green-900",
    "bg-green-700",
    "bg-green-500",
    "bg-green-300",
  ];

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
      <h3 className="text-xl font-bold mb-6">Contribution Graph</h3>

      <div className="grid grid-flow-col grid-rows-7 gap-1">
        {contributions.map((item, index) => (
          <div
            key={index}
            className={`
            w-3
            h-3
            gap-1
            rounded-sm
            ${colors[item]}
                hover:scale-125
                transition-all
                duration-200
                cursor-pointer
            }
          `}
          />
        ))}

        
      </div>
      <div className="flex justify-between text-xs text-gray-500 mb-2 mt-1">

        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Contribution in the last year
      </p>
    </motion.div>
  );
}

export default ContributionGraphCard;

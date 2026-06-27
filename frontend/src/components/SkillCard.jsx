import { motion } from "framer-motion";

function SkillCard({ skill, index }) {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 min-h-[180px] flex flex-col items-center justify-center gap-5 hover:-translate-y-3 transition duration-300 hover:border-blue-500/30 group"
    >
      <Icon
        className={`text-5xl md:text-6xl  ${skill.color} group-hover:scale-110 transition duration-300`}
      />

      <h3 className="text-lg md:text-xl font-semibold text-center">
  {skill.title}
</h3>
    </motion.div>
  );
}

export default SkillCard;

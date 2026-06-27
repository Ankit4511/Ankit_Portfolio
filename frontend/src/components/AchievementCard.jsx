function AchievementCard({ achievement }) {
  const Icon = achievement.icon;
  console.log(achievement);
  return (
    <div className="flex  gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-blue-500/30 transition duration-300">
      {/* logo */}
      <div className="flex items-center justify-center w-16 h-16">
        <Icon className="text-5xl text-yellow-400" />
      </div>

      {/* content */}
      <div className="flex-1">
        <div className="flex justify-between">
          <div className="w-full">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-xl">{achievement.title}</h3>

              <span className="text-gray-400 whitespace-nowrap ">
                {achievement.date}
              </span>
            </div>

            <p className="text-gray-400 mt-2">{achievement.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AchievementCard;

import achievements from "../data/achievements";
import AchievementCard from "./AchievementCard";
import { GrAchievement } from "react-icons/gr";

function Achievements() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-10"> 
        <GrAchievement className="text-purple-400 text-3xl inline-block mr-2" />
        Achievements
      </h2>

      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            achievement={achievement}
          />
        ))}
      </div>
    </div>
  );
}

export default Achievements;
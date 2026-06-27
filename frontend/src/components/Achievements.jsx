import achievements from "../data/achievements";
import AchievementCard from "./AchievementCard";
import { GrAchievement } from "react-icons/gr";
import MobileAchievementCard from "./MobileAchievementCard";


function Achievements() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-10"> 
        <GrAchievement className="text-purple-400 text-3xl inline-block mr-2" />
        Achievements
      </h2>

      {/* MOBILE */}

      <div className="hidden md:flex flex-col gap-6">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            achievement={achievement}
          />
        ))}
      </div>

      {/* DESKTOP */}

      <div
  className="
    md:hidden
    flex
    flex-nowrap
    gap-5

    overflow-x-auto
    overflow-y-hidden

    snap-x
    snap-mandatory

    scrollbar-hide
    pb-4
  "
>
  {achievements.map((achievement, index) => (

    <div
      key={index}
      className="
        min-w-[220px]
        shrink-0
        snap-center
      "
    >
      <MobileAchievementCard
        achievement={achievement}
      />
    </div>

  ))}
</div>
    </div>
  );
}

export default Achievements;
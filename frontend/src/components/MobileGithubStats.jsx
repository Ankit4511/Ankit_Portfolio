import MobileStreakCard from "./MobileStreakCard";
import githubStats from "../data/githubStats";
import MobileTopLanguages from "./MobileTopLanguages";
import MobileContributionGraph from "./MobileContributionGraph";


function MobileGithubStats() {
  return (
    <div className="bg-white/5
  border
  border-white/10
  rounded-3xl
  overflow-hidden
  backdrop-blur-md
  shadow-lg">

      {/* Top Section */}
      <div className="grid grid-cols-[120px_1fr] border-b border-white/10
  bg-gradient-to-r
  from-cyan-500/5
  via-transparent
  to-purple-500/5">

        <div className="p-7 border-r border-white/10">
          <MobileStreakCard
    streak={githubStats.streak}
  />
        </div>

        <div className="p-4">
          <MobileTopLanguages
    languages={githubStats.languages}
  />
        </div>

      </div>

      {/* Bottom Section */}
      <div className="p-4">
        <MobileContributionGraph />
      </div>

    </div>
  );
}

export default MobileGithubStats;
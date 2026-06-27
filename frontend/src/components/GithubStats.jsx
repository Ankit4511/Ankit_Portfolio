import githubStats from "../data/githubStats";
import TopLanguagesCard from "./TopLanguagesCard";
import StreakCard from "./StreakCard";
import ContributionGraphCard from "./ContributionGraphCard";
import { FaGithub } from "react-icons/fa";
import MobileGithubStats from "./MobileGithubStats";



function GithubStats() {
  // console.log(githubStats);
  return (
    <section className="px-6 md:px-10 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
  
  <div
    className="
    w-14
    h-14
    rounded-2xl
    bg-cyan-500/10
    border border-cyan-400/30
    flex items-center justify-center
    shadow-[0_0_20px_rgba(34,211,238,0.4)]
    "
  >
    <FaGithub className="text-cyan-400 text-3xl" />
  </div>

  <h2 className="text-4xl font-bold">
    GitHub Stats
  </h2>
  

</div>

<p className="text-gray-400 text-sm mt-2">
  Activity, streaks and contribution insights
</p>

{/* Mobile */}

<div className="md:hidden">
  <MobileGithubStats />
</div>

{/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[1fr_1.6fr_1.6fr] gap-6">

  <StreakCard
    streak={githubStats.streak}
  />

  <TopLanguagesCard
    languages={githubStats.languages}
    
  />


  <ContributionGraphCard />

</div>
      </div>

      {/* Divider */}
<div className="relative my-20">
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
</div>
    </section>
  );
}

export default GithubStats;




import { AiTwotoneFire } from "react-icons/ai";

function MobileStreakCard({ streak }) {
  return (
    <div>
      <h3 className="text-gray-400 text-sm mb-4">
        GitHub Streak
      </h3>

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-5xl font-bold tracking-tight">
            <span
              className="
              bg-gradient-to-r
              from-cyan-300
              via-cyan-400
              to-blue-600
              bg-clip-text
              text-transparent
            "
            >
              {streak.days}
            </span>
          </h2>

          <p className="text-sm text-gray-400">
            days
          </p>
        </div>

        <AiTwotoneFire
          className="text-5xl text-orange-400"
        />

      </div>
    </div>
  );
}

export default MobileStreakCard;
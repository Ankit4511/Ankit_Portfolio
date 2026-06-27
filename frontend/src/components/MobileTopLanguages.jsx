import DonutChart from "./DonutChart";

function MobileTopLanguages({ languages }) {
  const topLanguages = [...languages]
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 4);

  return (
    <div>
      <h3 className="text-gray-400 text-sm mb-4">
        Top Languages
      </h3>

      <div className="flex gap-4 items-center">

        
        {/* Left */}

        <div className="flex-1 space-y-2 min-w-0">

          {topLanguages.map((language, index) => (
            <div
              key={index}
              className="flex justify-between text-xs"
            >
              <span className="text-white">
                {language.name}
              </span>

              <span className="text-gray-400">
                {language.percentage}%
              </span>
            </div>
          ))}

        </div>

        {/* Right */}

        <div className="flex items-center justify-center">
          <DonutChart
            languages={topLanguages}
            mobile
          />
        </div>

        

      </div>
    </div>
  );
}

export default MobileTopLanguages;
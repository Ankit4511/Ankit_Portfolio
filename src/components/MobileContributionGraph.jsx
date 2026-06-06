import contributions from "../data/contributions";

function MobileContributionGraph() {
  const colors = [
    "bg-white/10",
    "bg-green-900",
    "bg-green-700",
    "bg-green-500",
    "bg-green-300",
  ];

  return (
    <div>

      <h3 className="text-gray-400 text-sm mb-4">
        Contribution Graph
      </h3>

      <div className="overflow-x-auto scrollbar-hide flex justify-center">

        <div className="grid grid-flow-col grid-rows-7 gap-1 w-max">

          {contributions.map((item, index) => (
            <div
              key={index}
              className={`
                w-2.5
                h-2.5
                rounded-[2px]
                ${colors[item]}
              `}
            />
          ))}

        </div>

      </div>

      <div className="flex justify-between text-[10px] text-gray-500 mt-3">

        <span>Jan</span>
        <span>Feb</span>
        <span>Mar</span>
        <span>Apr</span>
        <span>May</span>

      </div>

      <p className="text-[10px] text-gray-500 mt-3">
        Contributions in the last year
      </p>

    </div>
  );
}

export default MobileContributionGraph;
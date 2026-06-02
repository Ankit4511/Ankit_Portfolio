


function StatsCard({ title,
    value,
    message}) {
   
    return(
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-blue-500/30 transition duration-300">
            <>
  <h3 className="text-gray-400 mb-3">
    {title}
  </h3>

  <h2 className="text-5xl font-bold mb-3">
    {value}
  </h2>

  <p className="text-gray-400">
    {message}
  </p>
</>
        </div>
    )
}

export default StatsCard;
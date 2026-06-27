function MobileCertificationCard({ certification }) {
  const Icon = certification?.icon;

  if (!certification) return null;

  return (
    <div
      className="
          w-[220px]
    h-[280px]
    shrink-0
    snap-center

    bg-white/5
    border
    border-white/10
    rounded-2xl
    p-5

    backdrop-blur-md

    "
    >
      {Icon && (
        <Icon className="text-5xl text-yellow-400 mb-5" />
      )}

      <h3
        className="
        text-lg
        font-semibold
        leading-7
        line-clamp-4
        min-h-[110px]
      "
      >
        {certification.title}
      </h3>

      <p className="text-gray-400 text-sm line-clamp-2">
        {certification.description}
      </p>

      <p className="text-gray-500 text-sm mt-4">
        {certification.date}
      </p>
    </div>
  );
}

export default MobileCertificationCard;
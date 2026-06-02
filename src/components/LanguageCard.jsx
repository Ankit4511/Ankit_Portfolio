function LanguageCard({ language,color }) {
  return (
    <div className="flex justify-between items-center mb-3">

  <div className="flex items-center gap-3">
    <div
      className="w-4 h-4 rounded-full"
      style={{ backgroundColor: color }}
    />

    <span style={{ color }}>
      {language.name}
    </span>
  </div>

  <span className="font-medium">
    {language.percentage}%
  </span>

</div>
  );
}

export default LanguageCard;
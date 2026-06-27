import Certifications from "./Certifications";
import Achievements from "./Achievements";

function CertificationsAchievements() {
  return (
    <section className="px-6 md:px-10 py-10">

      {/* Divider */}
<div className="relative my-20">
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
</div>

      <div className="max-w-7xl mx-auto">

        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10">

          <Certifications />

          <Achievements />

        </div>

      </div>

      {/* Divider */}
<div className="relative my-20">
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
</div>

    </section>
  );
}

export default CertificationsAchievements;
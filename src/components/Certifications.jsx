import certifications from "../data/certifications";
import CertificationCard from "./CertificationCard";
import MobileCertificationCard from "./MobileCertificationCard";
import { LiaCertificateSolid } from "react-icons/lia";

function Certifications() {
  return (
    <div>

      <h2 className="text-4xl font-bold mb-10">
        <LiaCertificateSolid className="text-purple-400 text-4xl inline-block mr-2" />
        Certifications
      </h2>

      {/* DESKTOP */}

      <div className="hidden md:flex flex-col gap-6">

        {certifications.map((certification, index) => (

          <CertificationCard
            key={index}
            certification={certification}
          />

        ))}

      </div>

      {/* MOBILE */}

      <div
  className="
    md:hidden
    flex
    flex-nowrap
    gap-5
    overflow-x-auto
    snap-x
    snap-mandatory
    scrollbar-hide
    pb-4
  "
>

        {certifications.map((certification, index) => (

          <div
            key={index}
            className="
              min-w-[170px]
              snap-center
              shrink-0
            "
          >

            <MobileCertificationCard
  certification={certification}
/>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Certifications;
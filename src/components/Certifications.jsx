import certifications from "../data/certifications";
import CertificationCard from "./CertificationCard";
import { LiaCertificateSolid } from "react-icons/lia";

function Certifications() {
  console.log(certifications);
  return (
    <section className="px-6 md:px-10 py-1">
      <h2 className="text-4xl font-bold mb-10 " >
        <LiaCertificateSolid className="text-purple-400 text-4xl inline-block mr-2" />
        Certifications
      </h2>

      <div className="space-y-6">
        {certifications.map((certification, index) => (
          <CertificationCard key={index} certification={certification} />
        ))}
      </div>
    </section>
  );
}

export default Certifications;

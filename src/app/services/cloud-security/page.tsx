import CloudSecurityHero from "@/app/components/services/cloud-security/hero";
import CloudSecurityOverview from "@/app/components/services/cloud-security/overview";
import CloudSecurityMethodology from "@/app/components/services/cloud-security/methodology";
import CloudSecurityBenefits from "@/app/components/services/cloud-security/benefits";
import CloudSecurityClients from "@/app/components/services/cloud-security/clients";

export default function CloudSecurityPage() {
  return (
    <>
      <CloudSecurityHero />
      <CloudSecurityOverview />
      <CloudSecurityClients />
      <CloudSecurityMethodology />
     
      <CloudSecurityBenefits />
    </>
  );
}

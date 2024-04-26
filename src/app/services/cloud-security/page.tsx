import CloudSecurityHero from "@/app/components/services/cloud-security/hero";
import CloudSecurityOverview from "@/app/components/services/cloud-security/overview";
import CloudSecurityMethodology from "@/app/components/services/cloud-security/methodology";
import CloudSecurityBenefits from "@/app/components/services/cloud-security/benefits";
import CloudSecurityClients from "@/app/components/services/cloud-security/clients";
import CloudSecurityOffers from "@/app/components/services/cloud-security/offers";
import CloudSecurityAwards from "@/app/components/services/cloud-security/awards";
import WhyCloudPentesting from "@/app/components/services/cloud-security/whyPentest";

export default function CloudSecurityPage() {
  return (
    <>
      <CloudSecurityHero />
      <CloudSecurityOverview />
      <CloudSecurityOffers />
      <CloudSecurityAwards/>
      <WhyCloudPentesting/>
      <CloudSecurityClients />
      <CloudSecurityMethodology />
      <CloudSecurityBenefits />
    </>
  );
}

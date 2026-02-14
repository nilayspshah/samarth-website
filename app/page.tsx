import HeroSection from "@/components/HeroSection";
import AboutDoctor from "@/components/AboutDoctor";
import HospitalAffiliations from "@/components/HospitalAffiliations";
import SpecializedTreatments from "@/components/SpecializedTreatments";
import WhyChooseUs from "@/components/WhyChooseUs";
import AcademicExcellence from "@/components/AcademicExcellence";
import PatientCorner from "@/components/PatientCorner";
import AppointmentPortal from "@/components/AppointmentPortal";
import FAQ from "@/components/FAQ";
import BlogPreview from "@/components/BlogPreview";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutDoctor />
      <HospitalAffiliations />
      <SpecializedTreatments />
      <WhyChooseUs />
      <AcademicExcellence />
      <PatientCorner />
      <AppointmentPortal />
      <FAQ />
      <BlogPreview />
      <LocationSection />
    </>
  );
}

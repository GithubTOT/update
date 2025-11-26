
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import PricingTable from "../components/PricingTable";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="space-y-20">
      <Header />
      <Hero />
      <WhyChooseUs />
      <Services />
      <PricingTable />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}

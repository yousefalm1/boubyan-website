import Image from "next/image";
import HeroPage from "./components/hero/page";
import MainContent2 from "@/app/components/main-content2/page";
import Ibrahim_section from "./components/main-content1/page.js";
import AvailableOpportunities from "./components/opps/page";

export default function Home() {
  return (
    <main>
      <HeroPage />
      <Ibrahim_section />
      <MainContent2 />
      <AvailableOpportunities />
    </main>
  );
}

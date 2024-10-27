import Image from "next/image";
import HeroPage from "./components/hero/page";

export default function Home() {
  return (
    <main>
      <h1>
        <HeroPage />
        {/* add other stuff */}
      </h1>
    </main>
  );
}

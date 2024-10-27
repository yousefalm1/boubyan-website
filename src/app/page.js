import Image from "next/image";
import MainContent2 from '@/app/components/main-content2/page';

import Ibrahim_section from "./components/main-content1/page.js";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl ">
      <Ibrahim_section />
      <MainContent2 />
    </main>
  );
}

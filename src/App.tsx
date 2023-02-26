import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import NavBar from "@/scenes/navbar";
import HomePage from "@/scenes/home";
import BiographyPage from "@/scenes/biography";
import WorkPage from "@/scenes/work";
import ContactPage from "./scenes/contact";
import Footer from "./scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Inicio
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Inicio);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <NavBar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <HomePage selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <BiographyPage setSelectedPage={setSelectedPage} />
      <WorkPage setSelectedPage={setSelectedPage} />
      <ContactPage setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;

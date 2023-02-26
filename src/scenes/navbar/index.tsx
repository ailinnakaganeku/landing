import { useCallback, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import Logo from "@/assets/logo.png";
import Button from "@/components/button";
import Link from "@/components/link";
import { navbar as string } from "@/assets/strings/es.json";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const NavBar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isDesktopMin = useMediaQuery("(min-width: 1060px");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  }, [setIsMenuOpen]);

  return (
    <nav>
      <div
        className={`${flexBetween} ${navbarBackground} fixed top-0 z-30 w-full bg-black  py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={Logo} className="h-auto w-24 object-fill" />
            {isDesktopMin ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page={string.home}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page={string.biography}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page={string.work}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page={string.contact}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <Link
                    page={string.social_media}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Button setSelectedPage={setSelectedPage}>
                    {string.button}
                  </Button>
                </div>
              </div>
            ) : (
              <button
                className="rounded-md bg-secondary-500 p-2"
                onClick={handleToggleMenu}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {!isDesktopMin && isMenuOpen && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={handleToggleMenu}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page={string.home}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={string.biography}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={string.biography}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={string.contact}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

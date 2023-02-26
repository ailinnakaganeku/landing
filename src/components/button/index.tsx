import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const Button = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="text-transform: rounded-md bg-secondary-500 px-10 py-2 uppercase text-primary-100  hover:text-white "
      onClick={() => setSelectedPage(SelectedPage.Contacto)}
      href={`#${SelectedPage.Contacto}`.toLowerCase()}
    >
      {children}
    </AnchorLink>
  );
};

export default Button;

import Logo from "@/assets/logo.png";
import { footer as string } from "@/assets/strings/es.json";

const Footer = () => {
  return (
    <footer className="bg-primary py-16 text-white">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            <p>{string.title}</p>
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">{string.social_media}</h4>
          <p className="my-5">Twitch</p>
          <p className="my-5">Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">{string.contact}</h4>
          <p className="my-5">{string.email}</p>
          <p>{string.phone}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

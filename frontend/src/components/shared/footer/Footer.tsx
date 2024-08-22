import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="max-w-3xl mx-auto grid xl:grid-cols-4 sm:grid-cols-2 gap-10 xl:gap-0 justify-center sm:justify-start divide-x-2">
        <div className="px-5">
          <img
            className="w-fit h-fit object-cover"
            src="/images/logo/Logo.png"
            alt="logo"
          />
        </div>
        <div className="px-5">
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About us</li>
            <li>Organization</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="px-5">
          <ul className="flex flex-col gap-2">
            <li>Our Facebook Group</li>
            <li>Facebook Page</li>
            <li>YouTube</li>
            <li>info@bloodsbd.com</li>
          </ul>
        </div>
        <div className="px-5">
          <img
            className="w-fit h-fit object-cover"
            src="/images/icon.png"
            alt="icon"
          />
        </div>
      </section>
      <p className="pb-5 pt-10 font-thin text-center">
        ©2024 All Rights Reserved. Bloods Bangladesh
      </p>
    </footer>
  );
};

export default Footer;

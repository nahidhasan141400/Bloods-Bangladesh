/* eslint-disable @next/next/no-img-element */
import Container from "@/components/ui/Container";

const Footer = () => {
  return (
    <footer>
      <section className="max-w-3xl mx-auto grid grid-cols-4 divide-x-2">
        <div className="px-5">
          <img
            className="w-fit h-fit object-cover"
            src="/images/logo/logo.png"
            alt="logo"
          />
        </div>
        <div  className="px-5">
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>About us</li>
            <li>Organization</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div  className="px-5">
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
      <p className="pb-5 pt-10 font-thin text-center">©2024 All Rights Reserved. Bloods Bangladesh</p>
    </footer>
  );
};

export default Footer;

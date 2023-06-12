import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../../assets/Logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-black text-white overflow-x-hidden overflow-y-hidden">
        <div className="w-48">
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="flex gap-2 items-center"
          >
            <div>
              <img className="w-10 h-10" src={logo} alt="" />
            </div>
            <h3 className="text-2xl font-bold">Musiway</h3>
          </div>
          <p className="inline-block">
            we will embark on an exciting journey through the wonderful world of
            music. Whether you are a complete beginner or have some musical
            experience.
          </p>
        </div>
        <div>
          <span className="text-white text-xl font-semibold">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="text-white text-xl font-semibold">Pages</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="text-white text-xl font-semibold">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className="footer items-center px-6 py-4 bg-black text-white overflow-x-hidden overflow-y-hidden">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <FaFacebook className="w-8 h-8 text-[#c2880a] hover:text-white"></FaFacebook>
          <FaYoutube className="w-8 h-8 text-[#c2880a] hover:text-white"></FaYoutube>
          <FaTwitter className="w-8 h-8 text-[#c2880a] hover:text-white"></FaTwitter>
        </div>
      </div>
    </>
  );
};

export default Footer;

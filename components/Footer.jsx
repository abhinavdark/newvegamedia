"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter your digital marketing journey
        </h4>

        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
          onClick={() => window.open("https://calendly.com/vegamediain/30min", "_blank")}
        >
          <img
            src="/headset.svg"
            alt="Headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white text-uppercase">
            Book a Call
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Vegamedia</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright &copy; {new Date().getFullYear()} -{" "}
            {new Date().getFullYear() + 1}{" "}
            <span className="font-extrabold">Vegamedia</span>. All Rights
            Reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a href={social.url} target="_blank" rel="noreferrer noopener">
                <img
                  src={social.icon}
                  alt={social.name}
                  key={social.name}
                  title={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;

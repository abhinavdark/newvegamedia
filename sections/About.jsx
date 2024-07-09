"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Vegamedia" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">At</span>VegaMedia, we are passionate about helping businesses thrive in the digital landscape. 
As a full-service digital marketing agency, we offer a wide range of services tailored to meet the unique needs of our clients.
{" "}
        <span className="font-extrabold text-white">
         
        </span>{" "}
        {" "}
        <span className="font-extrabold text-white"></span> {" "}
        <span className="font-extrabold text-white">explore</span> the madness
        of the digital marketing by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="Arrow Down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>

  </section>
);

export default About;
